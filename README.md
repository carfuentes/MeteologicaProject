# MeteologicaProject-server
This project is an Express.js backend server that emits temperature and power data in intervals of 5 seconds to a web socket using the [socket.io][socket.io link] npm package   

It emits to two socker events:
    - temperature
    - power

The objects emited through these events represent data records and have the following JSON format: { value: number, unit: string}, where "value" refers to the value of the data record and "unit" to the data unit of the data record.

## Getting started
To run this project locally:

- Install [Node.js](https://nodejs.org/en/download/)( >= v16.13.1), [npm](https://www.npmjs.com/) (>=8.1.2) and [nodemon][nodemon link] package
- Move to the project root folder path
- Run `npm install` to install the necessary dependencies 
- Run `npm start` to serve in localhost:3000/

## Dependencies

- [express.js][express.js link]: Node module to build a basic web framework
- [js-yaml][js-yaml link]: YAML parser package
- [socket.io][socket.io link]: Node.js server that enables real-time bidirectional event-based communication.

## Configuration
In `config.js`, the port where the application is being served can be changed to other value.

## Application structure
- `data`: Folder with the `data.yml` file with the data to be emited by the application and the `read_data.js` script that parses this file into a javascript JSON object.
- `app.js`: The entry point of the application, where the server is defined.
- `config.js`: Script with the specifications for the app configuration


[express.js link]: https://github.com/expressjs/express
[js-yaml link]:https://github.com/nodeca/js-yaml
[socket.io link]:https://github.com/socketio/socket.io
[nodemon link]: https://github.com/remy/nodemon