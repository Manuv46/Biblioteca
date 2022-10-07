const express = require('express');
const booksRoutes = require("./src/books/routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/books", booksRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));