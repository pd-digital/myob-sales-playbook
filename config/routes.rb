Rails.application.routes.draw do
  devise_for :users

  root 'teams#index'

  resources :call_types_and_campaigns, only: [:index]
  resources :industries, only: [:index]
  resources :discovery_questions, only: [:update]
  resources :product_task_details, only: [:update]
  resources :client_tasks, only: [:index, :update] do
    get 'questions', on: :member
    get 'states', on: :member
    get 'products', on: :member
  end
  resources :products, only: [:index, :show]
end
