let express = require("express");
let app = new express();
app.set("view engine","ejs")
// set up database connection
const knex = require("knex")({
client: "mysql",
connection: {
host:"milestone-3-db.c5uiqm0ou8cg.us-east-2.rds.amazonaws.com",
user: "admin",
password: "passw0rd",
database:"milk_schema",
port: 3306,
},
});

app.get("/",(req,res) => {
knex
.select()
.from("venues")
.then((result) => {
res.render("index", {aConcerts: result});
});
});
app.listen(3000);
