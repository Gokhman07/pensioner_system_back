
require("dotenv").config();
require("./database");
require("./models");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const urlEncoderParser = bodyParser.urlencoded({ extended: false });
const compression = require("compression");


const pensioners=require("./router/pensioners")
const risk_insurances=require("./router/risk_insurances")




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


app.use("/pensioner",pensioners)
app.use("/risk_insurances",risk_insurances)

app.listen(+process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${process.env.PORT} ⚡️`);
});
