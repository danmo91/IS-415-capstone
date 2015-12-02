class Api::V1::PersonSerializer < Api::V1::BaseSerializer
  attributes :id,
             :fname,
             :lname,
             :background

  # has_many :experiences
end
