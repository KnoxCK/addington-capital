class PressRelease < ApplicationRecord
  mount_uploader :photo, PhotoUploader

  def formatted_date
    self.date.strftime('%d %b, %Y')
  end
end
