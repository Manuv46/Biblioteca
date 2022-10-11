const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const booksRoutes = require("./src/books/routes");
const rentalRoutes = require("./src/rental/routes");

const app = express();
const port = process.env.PORTSERVER;

app.use(express.json());
app.use("/api/books", booksRoutes);
app.use("/api/rental", rentalRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));