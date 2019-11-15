Rails.application.routes.draw do
  root to: 'posts#index'
  get   'posts/new' =>  'posts#new'
  get   'posts/edit' =>  'posts#edit'
  get   'posts/edit2' =>  'posts#edit2'
  get   'posts/edit3' =>  'posts#edit3'
  get   'posts/edit4' =>  'posts#edit4'
  get   'posts/edit5' =>  'posts#edit5'
  get   'posts/edit6' =>  'posts#edit6'
  get   'posts/logout' => 'posts#logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
