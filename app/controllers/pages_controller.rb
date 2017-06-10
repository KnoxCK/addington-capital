class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def what_we_do
  end

  def our_properties
  end

  def management_team
  end

  def press_media
  end

  def contact_us
  end

end
