Rails.application.routes.draw do
  # Devise routes for user authentication

  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: {
        sessions: 'api/v1/sessions'
      }
      resources :movies, only: [:index, :show]
      resources :theaters, only: [:index]
      resources :schedules, only: [:index, :show]
      resources :reservations, only: [:create] do
        post 'pay', to: 'payments#create'
      end

      resources :users, only: [:show, :update]
    end
  end
end
