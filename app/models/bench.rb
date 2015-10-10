class Bench < ActiveRecord::Base
  validates :description, :lat, :lon, presence: true

  def self.in_bounds(bounds)

    north_lat = bounds[:northEast]["lat"]
    south_lat = bounds[:southWest]["lat"]
    west_lon = bounds[:southWest]["lon"]
    east_lon = bounds[:northEast]["lon"]

    self.where(lat: south_lat..north_lat).where(lon: west_lon..east_lon)
  end
end
