json.array!(@benches) do |bench|
  json.extract!(bench, :description, :lat, :lon, :id, :seating)
end
