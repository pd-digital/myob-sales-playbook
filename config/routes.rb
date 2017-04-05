Rails.application.routes.draw do
  devise_for :users

  root 'teams#index'
  
  resources :call_types_and_campaigns, only: [:index]
  resources :industries, only: [:index]
  resources :client_tasks, only: [:index] do
    get 'questions', on: :member
    put 'questions', to: 'client_tasks#update_questions', on: :collection
    get 'states', on: :member
    put 'states', to: 'client_tasks#update_states', on: :collection
    get 'products', on: :member
    put 'products', to: 'client_tasks#update_benefits', on: :collection
  end
  resources :products, only: [:index, :show]
end
