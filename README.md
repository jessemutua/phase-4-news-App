# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version - ruby 2.7.4

### System dependencies

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"

gem "rails", "~> 7.0.6"

# Use postgresql as the database for Active Record

gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]

gem "puma", "~> 5.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]

# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]

gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem

gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb

gem "bootsnap", require: false

gem 'json'

gem "active_model_serializers", "~> 0.10.13"

- Configuration

1. Use bundle install to configure the program and install the required dependencies
2. Start the rails server
3. Start the development server

- Database creation
  rails db:create to create a database

- Database initialization

- How to run the test suite
  This program does not contain a test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

# Using the App

1. Clone the repository git@github.com:jessemutua/phase-4-news-App.git

2. Start rails server usings
3. Start the development server on a different terminal
4. On first time visit, click on the sign up and create an account
5. Login using the same credentials note using a different password will not log in

- On sucessfull login, you will get an alert that login was succesfull

6. Refresh the page to if home does not render after login

7. Click on new article to create a new article

8. To logout, click logout and refresh the page
