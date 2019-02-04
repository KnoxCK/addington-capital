class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @latest_press_releases = PressRelease.order(date: :desc).first(5)
  end

  def what_we_do
  end

  def our_case_studies
    @retail_case_studies = CaseStudy.where(category_id: 1).order(:priority)
    @residential_case_studies = CaseStudy.where(category_id: 2).order(:priority)
    @offices_case_studies = CaseStudy.where(category_id: 3).order(:priority)
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
      when 'allen'
        send_file "#{Rails.root}/app/assets/vcards/Matthew Allen.vcf", x_sendfile: true
      when 'ramlugun'
        send_file "#{Rails.root}/app/assets/vcards/Roshan Ramlugun.vcf", x_sendfile: true
      when 'shellabear'
        send_file "#{Rails.root}/app/assets/vcards/Helen Shellabear.vcf", x_sendfile: true
      when 'symonds'
        send_file "#{Rails.root}/app/assets/vcards/Philip Symonds.vcf", x_sendfile: true
      when 'cornford'
        send_file "#{Rails.root}/app/assets/vcards/Tim Cornford.vcf", x_sendfile: true
      when 'mcgovern'
        send_file "#{Rails.root}/app/assets/vcards/Mike McGovern.vcf", x_sendfile: true
    end
  end

end
