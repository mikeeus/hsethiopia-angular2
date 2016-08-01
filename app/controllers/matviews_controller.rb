class MatviewsController < ApplicationController

  def country
    @country = params[:country]
    @country_annual_imports = CountryAnnualImport.where(country: @country).group(:year).sum(:cif_usd)
    @country_annual_exports = CountryAnnualExport.where(country: @country).group(:year).sum(:fob_usd)
    
    render json: {
      countryAnnualImports: @country_annual_imports,
      countryAnnualExports: @country_annual_exports
    }
  end

  def year
    @year = params[:year]
    @annual_country_imports = CountryAnnualImport.where(year: @year)
    @annual_country_exports = CountryAnnualExport.where(year: @year)
    @annual_hscode_imports = HscodeAnnualImport.where(year: @year)
    @annual_hscode_exports = HscodeAnnualExport.where(year: @year)

    render json: {
      annualCountryImports: @annual_country_imports,
      annualCountryExports: @annual_country_exports,
      annualHscodeImports: @annual_hscode_imports,
      annualHscodeExports: @annual_hscode_exports
    }
  end

  def hscode
    @code = params[:code]
    @hscode_annual_imports = HscodeAnnualImport.where(code: @code)
    @hscode_annual_exports = HscodeAnnualExport.where(code: @code)
  
    render json: {
      hscodeAnnualImports: @hscode_annual_imports,
      hscodeAnnualExports: @hscode_annual_exports
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
