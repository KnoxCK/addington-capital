class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @transaction = Transaction.first
    @press_release = PressRelease.last
  end

  def what_we_do
  end

  def our_properties
    @case_studies = CaseStudy.all
  end

  def management_team
  end

  def press_media
    @press_releases = PressRelease.all
  end

  def contact_us
  end

end
