class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @transaction = Transaction.first
    @press_release = PressRelease.last
  end

  def what_we_do
  end

  def our_properties
    @retail_case_studies = CaseStudy.where(category_id: 1)
    @residential_case_studies = CaseStudy.where(category_id: 2)
    @office_case_studies = CaseStudy.where(category_id: 3)
  end

  def management_team
  end

  def press_media
    @press_releases = PressRelease.all
  end

  def contact_us
  end

end
