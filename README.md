# Welcome to Flights Service

## Project Setup

-clone the project on your local

-Execute `npm install` on the same path as of your root directory of teh downloaded project

-Create a `.env` file in the root directory and add the following environment variable

    -`PORT=3000`

-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```{
  "development": {
    "username": "<YOUR DB LOGIN NAME>",
    "password": "<YOUR DB PASSWORD>",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
}
```

-Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

-A flight belongs to an airplane but one airplane can be used in multiple flights

-A city has many airports but one airport belongs to a city

-One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at

### Airport ->id, name, address, city_id, created_at, updated_at
Relationship -> City has many airports and Airport belongs to a city (one to many)

# creation of airport model
``` npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

``` 
npx sequelize seed:generate --name add-airports
```

```npx sequelize db:seed:all
```

``` npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer
```

```npx sequelize db:migrate```

``` npx sequelize seed:generate --name add-airplanes
```

```npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer```