class CaseStudy < ApplicationRecord
  belongs_to :category
  mount_uploader :photo, PhotoUploader
  validates_presence_of :title
  validates :priority, inclusion: { in: [1, 2, 3, 4, 5, 6], message: "must be between 1 and 6" }
end
