# Rotten-manga overview

This is a web Page design intended to make sifting through all the manga out there easier. Users can generate data on manga attributes on a scale. And then create their own custom preferences with weighted values. Once the database has a sufficient records on manga attributes and a users preferences it will sort them to match the users preferences.

## Notable Technologies

React v 17.0.1
Ruby 2.6.5
Rails 6.1.1

## Using 

After forking and cloning this repo and [this repo](https://github.com/Allen70/backend-rotten-manga), you can get started.
Fire up the backend server first then the front end here. 
To get the backend server up and running make sure your terminal is in the top level folder of the backend repo and run bundle, rails db:migrate, and rails s.
```
bundle
rails db:migrate
rails s
```
When that's fired up you can start your front end. Make sure your terminal is in the top level folder of the frontend repo and run bundle, then npm start. If you don't have node or other dependencies installed [this link](https://github.com/kylecoberly/fis-computer-setup) is an excellent place to get started. 
```
bundle
npm start
```
## Different User-type Page Pescription

A critic who's logged in will have access to rating managas. A user will still have access to rating mangas, but will also have access to setting their own preferences.

## Demo

  Video coming soon
  
## Status 
  Curreent status: Incomplete 
  
  Upcoming features:
  -Web Page automatically sorts and filters based on preferences update
  -user login and ratings attached to each user
  -critic login and ratings attached to each critice.
  -user and critic ratings appear along-side each manga
 
 ## Contact 
 
 [@allen70](https://github.com/Allen70)
