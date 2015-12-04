# Peep-Keep
Capstone Project for IS 415

## Getting Started

Clone this repository

### Setup Postgres Database

We need to create a new user for our database.

Start Postgres:

`psql postgres`

Create new user by running:

`create role peep_keep with createdb login password 'admin';`

### Setup Rails API
This is the tutorial i used to setup the API with Postgres (https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres)

`bundle install`
then
`rake db:setup`

Now run the rails server from `/Peep-Keep/peep_keep_api` using `rails server`

### Setup React App

from `/Peep-Keep/peep_keep_ui` run `npm install`
Run react server from `/Peep-Keep/peep_keep_ui` using `npm run watch`
