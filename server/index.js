const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


//Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


//Handle GET requests to /api route, return a string
app.get("/api", (req, res) => {
    res.json({ message: "Ciao Mateeeeer!!!"});
});

//All other get req not handled will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

//Express create a web server for us on port 3001 if no value is given for variable PORT Heroku will set this value for us
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



