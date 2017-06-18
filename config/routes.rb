Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: 'pages#home'
  get 'what_we_do', to: 'pages#what_we_do'
  get 'our_properties', to: 'pages#our_properties'
  get 'management_team', to: 'pages#management_team'
  get 'press_media', to: 'pages#press_media'
  get 'contact_us', to: 'pages#contact_us'
  get 'downloadbrochure', to: 'application#download_brochure'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
