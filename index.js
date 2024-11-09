let express = require("express");
let app = new express();
app.set("view engine", "ejs");

// set up database connection
const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "milestone-3-db.c5uiqm0ou8cg.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "passw0rd",
        database: "milk_schema",
        port: 3306,
    },
});

// Add error handling for database connection
knex.raw('SELECT 1')
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

app.get("/", (req, res) => {
    knex
        .select()
        .from("venues")
        .then((result) => {
            res.render("index", { data: result }); // Changed from aConcerts to data
        })
        .catch((err) => {
            console.error('Query error:', err);
            res.status(500).send('Database query failed');
        });
});

// Add error handling for port in use
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running on port ${port}`);
});

// Add graceful shutdown
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    process.exit(0);
});
