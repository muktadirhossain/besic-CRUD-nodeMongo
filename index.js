 /*>>===//===>>=====>> Title: Entry Point >>===//===>>=====>>
 * Description: Main Entry Point for this application.,
 * Author: Muktadir Hossain (`https://github.com/muktadirhossain`) ,
 * Date: 12/03/2023 .
 >>===//===>>====>> *** >>===//===>>===>> *** >>===//===>>===>>*/
// get all dependencies:
const express = require("express");
const connectDb = require("./src/config/dbConnection");
const errorHandler = require("./src/middleWare/errorHandler");
const dotenv = require("dotenv").config();

// Connect to database:
connectDb()
// Initialize express app:
const app = express();
// declaring port:
const port = process.env.PORT || 3000;
// Middlewares:
app.use(express.json());
app.use("/api/contact", require("./src/routes/contactRoutes"));
app.use(errorHandler)


// start the server:
app.listen(port, () => {
  console.log("Server is running on port:", port);
});