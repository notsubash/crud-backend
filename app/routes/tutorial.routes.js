module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller');

    var router = require("express").Router();

    //Create a new Tutorial
    router.post("/", tutorials.create);

    //Retrieve all tutorials
    router.get("/", tutorials.findAll);

    //Retrieve all published tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single tutorial with id
    router.get("/:id", tutorials.findOne);

    // Delete a tutorial with id
    router.delete("/:id", tutorials.delete);

    // Update a tutorial with id
    router.put("/:id", tutorials.update);

    // Delete all tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};