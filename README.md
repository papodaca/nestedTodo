# Nested ToDo!

A Todo app with categories using rails and react+redux

Steps to run (was developed with ruby-2.3.0 and nodejs-4.4.5):

Asuming you have [rvm](http://rvm.io/) and [nvm](https://github.com/creationix/nvm) installed on your system the steps below will get this application up and going.

* Install Ruby
```bash
rvm install ruby-2.3.0
rvm use ruby-2.3.0
gem install bundler
```
* Install NodeJs:
```bash
nvm install 4.4.5
nvm use 4.4.5
```
* Install dependencies
```bash
bundle install
npm install
```
* Setup Database
```bash
rails db:setup
```
* Run the application
```bash
foreman start -f Procfile.dev
```
* Run tests
```bash
bundle exec rspec
```
