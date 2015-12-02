class Api::V1::ExperienceController < ApplicationController
  def show
    @experience = Experience.find(params[:id])
    render json: @experience, serializer: Api::V1::ExperienceSerializer
  end
end
