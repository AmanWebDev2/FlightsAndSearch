/
    -src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        
    -tests/ [later]
    
    #Welcome to Flights Service
    
    ##Project Setup
    -clone the project on our local
    -Execute `npm install` on the same path as of your root directory of the downloaded project
    -Create a `.env` file in the root directory and add the following environment variable
        -`PORT = 3000`
    -Inside the `src/config` folder create a new file `config.json` and then add the following place of json

    ```
 {
  "development": {
    "username": "<your_db_login_name>",
    "password": "<your_db_password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

    ```
        -Once you have added your db config as listed above, go to src folder from your terminal and execute `npx sequelize db:create`
        and then execute 
        `npx sequelize db:migrate`
    ```
    ```

##DB Design
    - Airplane Table
    - Flight
    - Airport
    - City
    
    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flights belongs to a one airport
