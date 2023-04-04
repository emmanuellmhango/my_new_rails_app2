Rails.application.routes.draw do
  get 'root/index'
  get '/greetings', to: 'greetings#greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'root#index'
end
