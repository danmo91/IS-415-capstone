class Api::V1::ExperienceController < ApplicationController
  def show
    @experience = Experience.find(params[:id])
    render json: @experience, serializer: Api::V1::ExperienceSerializer
  end

  def create
     @experience = Experience.new(experience_params)

     if @experience.save
       render json: @experience, serializer: Api::V1::ExperienceSerializer
     else
       render json: {error: @experience.errors.full_messages.to_sentence}, status: :unprocessable_entity
     end
  end

  def update
    @experience = Experience.find(params[:id])
    if @experience.update(experience_params)
      render json: @experience, serializer: Api::V1::ExperienceSerializer
    else
      render json: {error: @experience.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  def destroy
    @experience = Experience.find(params[:id])
    @experience.destroy
    render json: {response: 'experience destroyed'}
  end

  private
  def experience_params
    params.require(:experience).permit(:title, :date, :description, :person_id)
  end




end
