class PressRelease < ApplicationRecord
  mount_uploader :photo, PhotoUploader

  validates_presence_of :date
  validates_presence_of :title
  validates_presence_of :body
  validates_presence_of :first_paragraph

  def formatted_date
    self.date ? self.date.strftime('%d %b, %Y') : ""
  end
end
