class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @transaction = Transaction.first
    @latest_press_releases = PressRelease.order(date: :desc).first(5)
  end

  def what_we_do
  end

  def our_case_studies
    @retail_case_studies = CaseStudy.where(category_id: 1)
    @residential_case_studies = CaseStudy.where(category_id: 2)
    @offices_case_studies = CaseStudy.where(category_id: 3)
  end

  def management_team
  end

  def press_media
    @press_releases = PressRelease.order(date: :desc)
  end

  def contact_us
  end

  def vcard
    case params[:name]
    when 'roberts'
      send_file "#{Rails.root}/app/assets/vcards/Martin Roberts.vcf", x_sendfile: true
    end
  end

end
