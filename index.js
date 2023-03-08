const express = require("express");
const connectDb = require("./src/config/dbConnection");
const errorHandler = require("./src/middleWare/errorHandler");
const dotenv = require("dotenv").config();

connectDb()
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contact", require("./src/routes/contactRoutes"));
app.use(errorHandler)

app.listen(port, () => {
  console.log("Server is running on port:", port);
});