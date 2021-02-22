
require("dotenv").config();
require("./database");
require("./models");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const urlEncoderParser = bodyParser.urlencoded({ extended: false });
const compression = require("compression");

//const author = require("./router/author");
//const book = require("./router/book");
//const currency=require("./router/currency")
//const countries=require("./router/countries")
//const strategies=require("./router/strategies")
//const funds =require("./router/funds")
//const startups=require("./router/startups")
//onst startup_types=require("./router/startup_types")
//const stocks=require("./router/stocks")
const pensioners=require("./router/pensioners")




const app = express();
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(compression());

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(urlEncoderParser); 

/*

app.use("/currency", currency);
app.use("/countries", countries)
app.use("/strategies", strategies)
app.use("/funds", funds)
app.use("/startups",startups)
app.use("/startup_types" ,startup_types)
app.use("/stocks", stocks)
*/
app.use("/pensioner",pensioners)
app.listen(+process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${process.env.PORT} ⚡️`);
});
