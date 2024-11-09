const express = require("express");
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set up database connection
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "concert-db-instance-1.c61dq6ysma4i.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Password1",
    database: "paradise-concerts",
    port: 3306,
  },
});

// Serve static files
app.use(express.static('public'));

// Main route
app.get("/", (req, res) => {
  knex
    .select()
    .from("milk")  // Assuming your table is named "milk"
    .then((result) => {
      res.render('index', { data: result });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching data');
    });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
