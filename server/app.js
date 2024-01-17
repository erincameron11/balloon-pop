const express = require('express');

// Create a new instance of an express application
const app = express();

// Serve files from the public folder when app started
app.use(express.static('public'));

// Run the app locally
const PORT = 3000;
app.listen(PORT, () => {
    console.log("App is listening on port " + PORT);
})