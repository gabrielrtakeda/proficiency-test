source 'https://rubygems.org'
source 'https://rails-assets.org'

gem 'rails', '4.1.4'

gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'therubyracer', platforms: :ruby

group :assets do
  gem 'uglifier'
end

gem 'simple_form', '~> 3.0.2'
gem 'haml', '~> 4.0.4'

gem 'enumerate_it', '~> 1.2.0'
gem 'pg', '~> 0.17.1'
gem "bower-rails", "~> 0.10.0"

group :doc do
  gem 'sdoc', require: false
end

group :development do
  gem 'spring'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'meta_request'

  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-bundler'
  gem 'guard-livereload'
  gem 'guard-migrate'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0.1'
  gem 'shoulda-matchers', '~> 2.6.1'

  gem 'rails-assets-angular-mocks', '1.2.14'
  gem 'rails-assets-angular-scenario', '1.2.14'

  gem 'awesome_print'
  gem 'pry-rails'
end

group :test do
  gem 'capybara', '~> 2.3.0'
  gem 'launchy', '~> 2.4.2'
  gem 'database_cleaner', '~> 1.3.0'
  gem 'factory_girl_rails', '~> 4.4.1'
  gem 'forgery', '~> 0.6.0'
  gem 'fakeweb', '~> 1.3.0'
end

gem 'rails_12factor', group: :production

group :production do
end
