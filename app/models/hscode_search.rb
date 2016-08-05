class HscodeSearch

  def initialize(search_term)
    @search_term = search_term
  end

  def search
    search_result = Hscode.where("description ILIKE ? OR code::varchar(255) LIKE ?", "%#{@search_term}%", "%#{@search_term}%")
    return search_result
  end
end