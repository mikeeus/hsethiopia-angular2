class MatviewsController < ApplicationController

  def country
    @country = params[:country]
    @country_annual_imports = CountryAnnualImport.where(country: @country).group(:year).sum(:cif_usd)
    @country_annual_exports = CountryAnnualExport.where(country: @country).group(:year).sum(:fob_usd)
    
    render json: {
      annualImports: @country_annual_imports,
      annualExports: @country_annual_exports
    }
  end

  def year
    @year = params[:year]

    # Countries
    @top_ten_countries_import = CountryAnnualImport.where(year: @year).group(:country).sum(:cif_usd).invert.sort.reverse.slice(0..9)
    @top_ten_countries_export = CountryAnnualExport.where(year: @year).group(:country).sum(:fob_usd).invert.sort.reverse.slice(0..9)

    # Hscodes
    @top_ten_hscodes_import = HscodeAnnualImport.where(year: @year).group(:code, :description).sum(:cif_usd).invert.sort.reverse.slice(0..9)
    @top_ten_hscodes_export = HscodeAnnualExport.where(year: @year).group(:code, :description).sum(:fob_usd).invert.sort.reverse.slice(0..9)

    render json: {
      topTenCountriesImport: @top_ten_countries_import,
      topTenCountriesExport: @top_ten_countries_export,
      topTenHscodesImport: @top_ten_hscodes_import,
      topTenHscodesExport: @top_ten_hscodes_export
    }
  end

  def hscode
    @code = params[:code]
    @hscode_annual_imports = HscodeAnnualImport.where(code: @code).group(:year).sum(:cif_usd)
    @hscode_annual_exports = HscodeAnnualExport.where(code: @code).group(:year).sum(:fob_usd)
  
    render json: {
      annualImports: @hscode_annual_imports,
      annualExports: @hscode_annual_exports
    }
  end

  def refresh_matviews
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        country_annual_imports
    }
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        country_annual_exports
    }
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        hscode_annual_imports
    }
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        hscode_annual_exports
    }
  end
end
