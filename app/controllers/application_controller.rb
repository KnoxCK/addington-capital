class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!, except: [:download_brochure]

  def download_brochure
    send_file "#{Rails.root}/app/assets/Addington_Capital_Brochure.pdf", type: "application/pdf", x_sendfile: true
  end
end
