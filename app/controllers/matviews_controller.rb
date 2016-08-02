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
    @annual_country_imports = CountryAnnualImport.where(year: @year).group(:country).sum(:cif_usd).invert.sort.reverse.slice(0..9)
    @annual_country_exports = CountryAnnualExport.where(year: @year).group(:country).sum(:fob_usd).invert.sort.reverse.slice(0..9)

    # Hscodes
    @annual_hscode_imports = HscodeAnnualImport.where(year: @year).group(:code, :description).sum(:cif_usd).invert.sort.reverse.slice(0..9)
    @annual_hscode_exports = HscodeAnnualExport.where(year: @year).group(:code, :description).sum(:fob_usd).invert.sort.reverse.slice(0..9)

    render json: {
      annualCountryImports: @annual_country_imports,
      annualCountryExports: @annual_country_exports,
      annualHscodeImports: @annual_hscode_imports,
      annualHscodeExports: @annual_hscode_exports
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
