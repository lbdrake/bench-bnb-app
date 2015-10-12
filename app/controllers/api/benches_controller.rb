class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds({northEast: params["northEast"], southWest: params["southWest"]})
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lon, :seating)
  end
end
