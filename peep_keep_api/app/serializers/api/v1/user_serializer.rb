class Api::V1::UserSerializer < Api::V1::BaseSerializer
  attributes :id,
             :fname,
             :lname,
             :email

  # has_many :persons
end
