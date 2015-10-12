class Bench < ActiveRecord::Base
  validates :description, :lat, :lon, :seating, presence: true
  validates :seating, inclusion: {in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}

  def self.in_bounds(bounds)

    north_lat = bounds[:northEast]["lat"]
    south_lat = bounds[:southWest]["lat"]
    west_lon = bounds[:southWest]["lon"]
    east_lon = bounds[:northEast]["lon"]

    self.where(lat: south_lat..north_lat).where(lon: west_lon..east_lon)
  end
end
