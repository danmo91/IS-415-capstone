class Api::V1::PersonController < ApplicationController

  def show
    @person = Person.find(params[:id])
    render json: @person, serializer: Api::V1::PersonSerializer
  end


end
