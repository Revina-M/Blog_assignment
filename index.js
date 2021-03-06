    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");

    require('dotenv').config();

    const app = express();
    const port = process.env.PORT || 8080;

    app.use(cors());
    app.use(express.json());

    const uri = process.env.ATLAS_URI;

    mongoose.connect(uri,{
        useNewUrlParser:true
    });

    const connection = mongoose.connection;
    connection.once("open",()=>
        console.log("MongoDB connection established successfully")
    );

    const articlesRouter = require('./routes/articles');
    app.use('/articles',articlesRouter);


    // Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

    app.listen(port,()=>console.log(`The app is running on Port: ${port}`));