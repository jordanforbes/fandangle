Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :show]
      resources :theaters, only: [:index]
      resources :schedules, only: [:index, :show]
      resources :reservations, only: [:create]
      resources :reservations do
        post 'pay', to: 'payments#create'
      end
      devise_for :users, controllers: {
        sessions: 'api/v1/users/sessions'
      }
    end
  end
end
