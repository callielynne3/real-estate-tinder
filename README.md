[![Build Status](https://travis-ci.org/callielynne3/real-estate-tinder.svg?branch=master)](https://travis-ci.org/callielynne3/real-estate-tinder)

# Real Estate Tinder

## Synopsis

Real Estate Tinder matches users with their ideal rental properties, and gives them the power to 'swipe left' on properties that they would rather not see again.  If a user 'swipes right', that rental is cached in the user's favorites.

Users can also experience the app as rentors, posting listings and monitoring 'interest hits' on their properties as browsing users swipe right on them. 

## Motivation

As residents of the Bay Area, we collectively understood the frustration involved with searching for rentals in a competitive real estate market. Our main goal was to simplify, clarify, and personalize the rental browsing process. Beyond wanting to provide a functional remedy, we saw a genuine opportunity to offer rental-seekers an improved app experience. By tracking users opinions with swipes, we can establish a fun, interactive, and personalized filter.


## Setup

### Install gems and packages
```
bundle && npm install
```

### Start Rails

#### Create development database, migrate, seed
```
rails db:create && rails db:migrate && rails db:seed
```

#### Run development server via `foreman`
```
foreman start -f Procfile.dev
```

## Contributors

* Ibraheem Abdul-Malik - [@ibraheem4](https://github.com/ibraheem4)
* Candace Lazarou - [@cclazarou](https://github.com/cclazarou)
* Eric O'Rear - [@ejoreo](https://github.com/ejoreo)
* Jonah Price - [@jyonah](https://github.com/jyonah)
* Callie Tomlinson - [@callielynne3](https://github.com/callielynne3)
