class GreetingsController < ApplicationController
  def greeting
    @greeting = Message.order('RANDOM()').first
    render json: {message: @greeting.message}
  end
end