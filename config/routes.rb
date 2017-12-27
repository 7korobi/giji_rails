require 'sidekiq/web'
require 'sidekiq/cron/web'

Giji::Application.routes.draw do
  mount Sidekiq::Web, at: "/users/7korobi/sidekiq"


  resources :trpg_stories, except: %w[show]

  resources :stories, only: %w[index]
  scope ':folder' do
    resources :stories, only: %w[index]
  end

  scope ':story_id' do
    resources :trpg_events,  except: %w[show]
    get "events" => "messages#file"
    get "file"   => "messages#file", :as => :message_file
    scope ':turn' do
      resources :messages, only: %w[index show]
      resources :trpg_messages, except: %w[show]
    end
  end

  resources :chr_sets
  resources :chr_votes

  resources :users do
    member do
      get  :byebye_list
      get  :history
    end
  end

  namespace :map_reduce do
    resources :faces, only: %w[index show]
  end

  root :to => 'users#index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
