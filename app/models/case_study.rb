class CaseStudy < ApplicationRecord
  belongs_to :category
  mount_uploader :photo, PhotoUploader
end
