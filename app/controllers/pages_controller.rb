class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @latest_press_releases = PressRelease.order(date: :desc).first(5)
  end

  def what_we_do
  end

  def our_case_studies
    @retail_case_studies = CaseStudy.where(category_id: 1).reverse
    @residential_case_studies = CaseStudy.where(category_id: 2).reverse
    @offices_case_studies = CaseStudy.where(category_id: 3).reverse
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
      when 'wagstaff'
        send_file "#{Rails.root}/app/assets/vcards/Alex Wagstaff.vcf", x_sendfile: true
      when 'hwang'
        send_file "#{Rails.root}/app/assets/vcards/Anna Hwang.vcf", x_sendfile: true
      when 'symonds'
        send_file "#{Rails.root}/app/assets/vcards/Philip Symonds.vcf", x_sendfile: true
      when 'vaughan'
        send_file "#{Rails.root}/app/assets/vcards/Steven Vaughan.vcf", x_sendfile: true
      when 'bouma'
        send_file "#{Rails.root}/app/assets/vcards/Nic Bouma.vcf", x_sendfile: true
    end
  end

end
