# HomeLike Assignment

# Getting started

Pre-requisite
  - node v14.x.x

Steps to run the project
```console
$ git clone -b homelike https://github.com/fahadbillah/base-gql-express homelike-fahad && cd homelike-fahad
$ yarn install
$ yarn build
$ yarn start
```

Open [GraphQL Playground](https://studio.apollographql.com/graph/HomeLike/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBnBAQwCcoALHAdwEsUyIYUdCkBPHAM2oBsUFicEAd2iEU1CEgA6SAI4x%2B7AiXIB1APIAxHn2LAZOfEVJkDOfUkOHqYM4eIQIcPHZxRarV1Aapiny1YwBMQAkrYBhiJQYhJIFlZW3GKukZKuAL5mmUjZMrjKJoJI3Ow0dJw6-DLyikYqZKpcvPzxdSZmABSuTbrorQkOTnjoOABMOLijAPQAzFMALCluHuhS4GSEANaEaxM4YBvbUwDmhABe1AAOMMQZZgCU-Tg2roPOXh5ePih%2BrkH8YVcURikiekWSEUSaUh2UM2VySHyxnIRRKVFoFGB4kkbkcxDA1CQYgQLjkCj8bTUABlRNi4mYCuROkDabE%2Bkskih0KMZgA6ADsAE4AByC%2BYAVgAjJLxcLxfNJfNRhzJOhBQAGXnzGbzQXigBs-OFksN4qNSwJeBQLCgCCp1DgtHQ%2Br2wqmkumMruAUerhekLepIS7hQ-mD31%2BkP%2BoXCCSxsTBOE5KukMNclutSFtWRkCKR9XR5QARhByj1%2BMwkGAk6ycd4hASiXxSTUKYyGuXiABBKs06J01rt5mQzvsyGGXCBkbjSazBZLEOsVbrLY7EB7A6rk7nK43BcRpdrIssY5JMAk0wgb1x2tIMcJcFcnkCkViqUyuUKpUptWa7W6g0jRNfkzWFC1qCtG07QdJ1xXVa8cF9SF-QGRx3khRcvhgXww0CYJAUheNQQ5CEHxrVMElhKwMygnMchkPIcAAJQQY4IJ%2BEFLAAMhwGk2NTSdsJwOgIOEiA3GIIg%2BBwJAEEoHBoxkOBGE4nBJOOVp1PY4hOI6Qlri5J4iUQZdZPkxSr0hBA4EIHgRjWMzowAAWOGyeF5bw4DWVxLkIPA8EoBtl0IIsoFsSzwyQLhiDgAAFPyAqCtYQrC7yAnSJCEhQqxjIQVxrNs7hXAAKwgQkEFjHB4QYxFmA4XQa34hSCGEsgEBwYrKCYFAIE2ZBnksNrCHPAQOCEQQ6ArCBLn4TiAHI8DEtTsMYkQmrKCgEAAD3YlgmGjHBJSUlS6UawkAFVgklVo1sJPSkAM%2B8rAKuycCPHgkjIUZRhctzuA8pw0oSXz-MC-Flw9HUgaq%2B5cxq3BbssDacG23bUGaitlSQZTrVOxHLv4UYbogfj7sep4Xu4eyQA4QgNjAX7CoBryIqsEHEvBtZtVGI7WYyuGBIqYgrQkqSKoxgQZla-rEeO3HYjOpACeIGZidJ-TGCewxKepxzgkZ9zPOhwx2bBsBgtC8Kslh%2BjBa7XziBQRB0YAYUk4lGJ%2BUopnEy4HBmgROu63r%2Bp6ox2v4BwBEQfzCGOPLapExaoHd5sZLk5gHad5AmBzilvCQWSoD4asw6TiXGMIbhuGlgaDIqBBuDARaSHamyqzEIR2C4Rvwhx1SU7F%2B2SGz1BWkH4lh8d52UDJzWninRYMJWNZN22Y3cWwr3l2PJBT2Gi8N85bk%2BTlKUDXVfl1WFdVb5ZO8NS1dVdVGeVBRmSUr7v9LMqsbL7DQkGKwmEMIHj%2BPhSqqR%2BwJhIigFMCFqqCzGgIc8AA3Ru00Z4YzlqpSScAIDoKnqPFAmlrIEIQEQmeelzarygMKG%2B8x1SjAALT8ltFAZh8wEDCnmMw4UhAoBFmYUWDg8wOCCjAOKQgoxBQhTWDbPMOBNCEFQUIWg7U3ZiymCxfB6CpgAGV6CUBwadHqxxTwIGUao4g6jzBmDMRYqxai%2BDUOpqMIUhAEAzHccwsAtp9ScO8QgZhgpvr8l8QgIs3NhSjHVAacKCiaqtm7io5x0ERatFptY9R9oMndFSTYtOiZ-5WEDAuT445N44SWNGAiZEiKWETI%2BJYqQKIPionCOi2QQAABoQCoJINQEK3ASQYBAL0kAQ0Rp4DGfoEAXZGD0BsWcTiaxlwACFjAVgQKwAAUmQIsABxdw6hqC7JCOdM4IRJQADlqAhDwCEJATFxRQBdiEfUIRNiXAABoADUXa7MFLyHZuzLgAC13mfOKgATS2jcgAKrs6g4Lip-M2FSBFUBWDqCxSgG5hyblwEhXEgAsmcAAiuqTFMLKA3IACKbDpWcTQZAYUItJeqGF%2BiHkhDgNwMgYAoWkoRTCs4NyzgwpmAykI8wbn6JoOCn5ZBKAhFKvC4qpLpXFSgKMUl9LjiSg4BS3kpL%2BRwBmPyF2sUoBUiQMVFVhzwWkqQAi2yPyixFjADCpAeAmLMMOUxLaRYUA-LiuKKkHBYpnBcCAdIcagA&variant=current) in your browser.

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
