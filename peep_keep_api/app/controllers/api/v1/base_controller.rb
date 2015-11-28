class AccessDeniedError < StandardError
end
class NotAuthenticatedError < StandardError
end
class AuthenticationTimeoutError < StandardError
end
class Api::V1::BaseController < ApplicationController
  attr_reader :current_user

  before_action :destroy_session

  rescue_from AuthenticationTimeoutError, with: :authentication_timeout
  rescue_from NotAuthenticatedError, with: :user_not_authenticated

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from Pundit::NotAuthorizedError, with: :unauthorized!

  def destroy_session
    request.session_options[:skip] = true
  end

  def not_found
    api_error(status: 404, errors: 'Not found')
  end

  def api_error(status: 500, errors: [])
    unless Rails.env.production?
      puts errors.full_messages if errors.respond_to? :full_messages
    end
    head status: status && return if errors.empty?

    render json: {erros: errors}, status: status
  end

  protected

  def authenticate_user!
    fail NotAuthenticatedError unless user_id_included_in_auth_token?
    @current_user = User.find(decoded_auth_token[:user_id])
  rescue JWT::ExpiredSignature
    raise AuthenticationTimeoutError
  rescue JWT::VerificationError, JWT::DecodeError
    raise NotAuthenticatedError
  end

  private

  def user_id_included_in_auth_token?
    http_auth_token && decoded_auth_token && decoded_auth_token[:user_id]
  end

  def decoded_auth_token
    @decoded_auth_token || JsonWebToken.decode(http_auth_token)
  end

  def http_auth_token
    @http_auth_token ||= get_auth_token
  end

  def get_auth_token
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def authentication_timeout
    render json: { errors: ['Authentication Timeout'] }, status: 419
  end

  def user_not_authenticated
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end
end
