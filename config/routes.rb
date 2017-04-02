Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'teams#index'
  resources :call_types_and_campaigns, only: [:index]
  resources :industries, only: [:index]
  resources :topics, only: [:index, :show, :update] do
    get 'questions', on: :member
    get 'states', on: :member
    get 'products', on: :member
  end
  resources :products, only: [:index]
end
