class PressRelease < ApplicationRecord
  mount_uploader :photo, PhotoUploader

  def formatted_date
    self.date.strftime('%d %b, %Y') if self.date
  end
end
