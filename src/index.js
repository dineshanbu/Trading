const cors = require("cors");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("../config/connection");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const errorHandler = require("./middleware/error");
const routes = require("./routes/index.route");
var engines = require("consolidate");
var compression = require('compression')
//load env variables
dotenv.config({
  path: "./config/config.env",
});
process.env.NODE_OPTIONS = "--max - old - space - size=4096";
process.env.GENERATE_SOURCEMAP = false;
//Connect to database
connectDB();

const app = express();
app.use(compression())
app.use("*", cors());


// Define paths for Express config

app.enable("trust proxy");

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("view options", {
  layout: false,
});

app.engine('html', engines.mustache);
app.set('view engine', 'html');

// Set Public folder


//Set Request Size Limit
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

//Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash
app.use(flash());

//Global Variable
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Router
app.get("/", async (req, res) => {
  res.send("Welcome to Share Market");
});



app.use("/", routes);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message} ${err}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
