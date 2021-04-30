const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//If React make a GET call, we return a string
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

//Express create a web server for us on port 3001 if no value is given for variable PORT Heroku will set this value for us
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


