const path = require("path")
require("../db/mongoose");
require("../global/global_functions")
require("dotenv").config({ path: path.join(__dirname, "./.env") });

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const promiseRouter = require("express-promise-router");
const router = promiseRouter();

const app = express()
  .use(express.json())
  .use(
    express.urlencoded({
      extended: true,
    })
  )
  .use(morgan("dev"))
  .use(router)
  .use(
    cors({
      credentials: true,
      origin: (origin, callback) => callback(null, true),
    })
  );



// CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


const PORT = process.env.PORT || 3002;

const apiRoutes = require("./routes");
app.use("/api/v1", apiRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  return notFoundError(res, "End point you requested not found !")
});

app.listen(PORT, ()=>{
    console.log(`Server start listening on port ${PORT}`);
})

