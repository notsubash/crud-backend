//Importing express, body-parser and cors
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//creating an express app for building the Rest api
const app = express();

//Adding cors and body-parser 
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

const db = require('./app/models');
const Role = db.role;

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to Subash's Application."})
});

require("./app/routes/tutorial.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

//Listens on port 8080 for incoming requests
//setting port and listening for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running onport ${PORT}.`);
});

function initial(){
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id:2,
        name: "admin"
    });
}
