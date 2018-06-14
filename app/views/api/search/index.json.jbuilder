
    # json.extract! @to_search, :id, :content, :searchable_type, :searchable_id


@to_search.each do |result|
  json.set! result.id do
    json.extract! result, :id, :content, :searchable_type, :searchable_id
  end
end