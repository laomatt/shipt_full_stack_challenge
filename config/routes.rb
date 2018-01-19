Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'github#index'

  resources :github do 
    collection do 
      get 'get_followers'
    end
  end

end
