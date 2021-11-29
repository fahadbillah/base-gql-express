# Volvo Assignment

# Getting started

Pre-requisite
  - node v14.x.x

Steps to run the project
```console
$ git clone -b volvo https://github.com/fahadbillah/base-gql-express volvo-fahad && cd volvo-fahad
$ yarn install
$ yarn build
$ yarn start
```

Open [GraphQL Playground]() in your browser.

Documentation, operations can be found in the apollo graphql studio.



## Apartment Search
```graphql
# search without any filter or location
query searchWOFilter{
  search
  {
    id
    rooms
    city
    country
    userId
    location{
      lat
      lon
    }
  }
}

# search only with filter
query searchWfilter{
  search
  (
    filter:{
      rooms: 2 # 2/3/4
      city:"dhaka" # dhaka/gazipur
    }
  ){
    id
    rooms
    city
    country
    userId
    location{
      lat
      lon
    }
  }
}

# search only with location coordinates
query searchWLocation{
  search
  (
    location:{
      lat:23.798945115854142
      lon:90.43495678167578
      distanceLimit:6 # 8/12/15
    }
  ){
    id
    rooms
    city
    country
    userId
    location{
      lat
      lon
    }
    distance
  }
}

# search with both filter and location coordinates
query searchWfilterAndLocation{
  search
  (
    filter:{
      # rooms: 2 # 2/3/4
      city:"dhaka" # dhaka/gazipur
      country:"bangladesh"
    }
    location:{
      lat:23.798945115854142
      lon:90.43495678167578
      distanceLimit:5
    }
  ){
    id
    rooms
    city
    country
    userId
    location{
      lat
      lon
    }
    distance
  }
}
```


## Registration & Login
```graphql
# run this to create new user
mutation reg{
  registration(input:{
    name:"new user"
    email: "newuser@gmail.com"
    password:"abcd"
    confirmPassword:"abcd"
  }){
    id
    name
    email
    joined
  }
}

# after login use the jwt token in header for other operation's to run
# login with existant user 1
mutation loginUser1{
  login(input:{
    email: "billah22@gmail.com"
    password:"1234"
  })
}

# login with existant user 2
mutation loginUser2{
  login(input:{
    email: "fahad@gmail.com"
    password:"4321"
  })
}

# first created user 3 then login
mutation loginUser3{
  login(input:{
    email: "newuser@gmail.com"
    password:"abcd"
  })
}

```


## Apartment Create
```graphql
# try w/o proper jwt token to see error message
# this creates new apartment entry connected to this user
# all the input fields are mandatory field
mutation createApartment{
  createApartment(input:{
    rooms:4
    city:"dhaka"
    country:"bangladesh"
    lat:23.8551560708853
    lon:90.40492549316876
  }){
    id
    rooms
    city
    country
    userId
    location{
      lat
      lon
    }
  }
}
```

**Header data**
```
{
  "Authorization": "Bearer login-first-then-use-the-token-here"
}
```


## Favorite Create/Remove/Show
```graphql
mutation toggleFavorite {
  toggleFavorite(id: "279ae327-dce6-432e-9227-deb43282056d")
}

query favoriteList {
  favoriteList {
    favorites {
      id
      rooms
      city
      country
      userId
      location {
        lat
        lon
      }
    }
  }
}

```

**Header data**
```
{
  "Authorization": "Bearer login-first-then-use-the-token-here"
}
```
