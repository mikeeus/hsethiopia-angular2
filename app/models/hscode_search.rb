class HscodeSearch

  def initialize(search_term)
    @search_term = search_term
  end

  def search(search_term)
    search_result = execute %{
      SELECT * FROM "hscodes" WHERE (description ILIKE '%#{search_term}%')
    }
    return search_result
  end

end