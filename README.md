`src`-> inside the src folder all the actual source code regarding the project will reside, this will not include any type of tests.(you might need to make a separate folder for the tests)

let's take a look inside the src folder ->

- `config` - In this folder anything and everything regarding any configuration or set up of library or module will be done. For example : setting up `dotenv` so that we can use environment variables anywhere in a cleaner fashion, this is done in `server-config.js`. One more example of that is setting up logging library for creating meaningful logs

- `routes` - in this folder we register routes and corresponding middlewares and controllers to it

- `middlewares` they are just going to intercept the incoming requet where we can write our validators and contollers to it

- ` controllers` they are the kind of last middlewares as post them you call your business layer to execute the business logic. In contollers we just receive the incoming request and data and then pass it to the business layer and once business layer returns an output, we structre the API response in controllers and send the output.

- `repositories` this folder contains all the logic using which we can interact with the db by writing queries, all the raw queries or ORM will go here.

- `services` contains the business logic and interact with repositories for data from the database. 

- `utils` for helper methods, error classes etc;

### Set up

- Download the template from the github and open it on your favourite editor.

- Go inside the folder path and execute the following command 
```
npm install
```

In the root directory create a `.env` file and add the following environment variable --
```
PORT = <port number of your choice>
```
- Go inside the `src` and run the following command
```
npx sequelize init
```
- By executing the above command you will get migrations and seeders folder, along with a config.json file inside the `config` folder
- If you are setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using.

- If you are setting up test or production environment, make sure you replace the host with the hosted db url.

- To run run the server execute 
```
node --watch <filename>
```