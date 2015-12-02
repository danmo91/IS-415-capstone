class Api::V1::PersonController < ApplicationController

  def show
    @person = Person.find(params[:id])
    render json: @person, serializer: Api::V1::PersonSerializer
  end

  def create
     @person = Person.new(person_params)

     if @person.save
       render json: @person, serializer: Api::V1::PersonSerializer
     else
       render json: {error: @person.errors.full_messages.to_sentence}, status: :unprocessable_entity
     end
  end

  def update
    @person = Person.find(params[:id])
    if @person.update(person_params)
      render json: @person, serializer: Api::V1::PersonSerializer
    else
      render json: {error: @person.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  def destroy
    @person = Person.find(params[:id])
    @person.destroy
    render json: {response: 'person destroyed'}
  end

  private
  def person_params
    params.require(:person).permit(:fname, :lname, :background, :user_id)
  end


end
