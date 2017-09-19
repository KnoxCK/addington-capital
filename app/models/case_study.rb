class CaseStudy < ApplicationRecord
  belongs_to :category
  mount_uploader :photo, PhotoUploader
  validates_presence_of :title, :summary, :description
  validates :priority, inclusion: { in: [nil, 1, 2, 3, 4, 5, 6], message: "must be a number between 1 and 6" }
end
