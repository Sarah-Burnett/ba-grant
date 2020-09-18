const express = require("express");
const PORT = process.env.PORT || 5000;
const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const { pool, Client } = require("pg");

require("dotenv").config();

const app = express();

//Connect to postgres db
const client = new Client({
	connectionString: process.env.DB_URI,
	ssl: {
		rejectUnauthorized: false,
	},
});
client
	.connect()
	.then(() => console.log(`Connected to db`))
	.catch((err) => console.log(err));

//graphql route

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
