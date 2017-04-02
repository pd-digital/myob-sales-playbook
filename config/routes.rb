Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'teams#index'
  resources :call_types_and_campaigns, only: [:index]
  resources :industries, only: [:index]
  resources :topics, only: [:index] do
    get 'questions', on: :member
    put 'questions', to: 'topics#update_questions', on: :collection
    get 'states', on: :member
    put 'states', to: 'topics#update_states', on: :collection
    get 'products', on: :member
  end
  resources :products, only: [:index]
end
