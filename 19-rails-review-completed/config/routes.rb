Rails.application.routes.draw do
  resources :purchases
  get 'brews/strongest', to: 'brews#strongest' 
  resources :brews

end
