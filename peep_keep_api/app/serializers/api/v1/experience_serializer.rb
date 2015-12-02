class Api::V1::ExperienceSerializer < Api::V1::BaseSerializer
  attributes :id,
             :title,
             :description,
             :date
end
