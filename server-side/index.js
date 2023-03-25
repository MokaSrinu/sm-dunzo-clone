const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const InitiateMongoServer = require('./config/db');
const userRouter = require('./routes/user');
const { API_ENDPOINT_NOT_FOUND_ERR, SERVER_ERR } = require('./errors');

//Configuring dotenv
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

// Settingup middlewares to parse request body and cookies
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// app.use(cookieparser());
app.use(cors());

app.use(setReqContext);
app.use(logger);

app.use(userRouter);


function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}

function setReqContext(req, res, next) {
    req.context = {
        // user will be present for authenticated routes
    }
    next();
}

// page not found error handling  middleware

app.use("*", (req, res, next) => {
    const error = {
      status: 404,
      message: API_ENDPOINT_NOT_FOUND_ERR,
    };
    next(error);
  });
  
  // global error handling middleware
  app.use((err, req, res, next) => {
    console.log(err);
    const status = err.status || 500;
    const message = err.message || SERVER_ERR;
    const data = err.data || null;
    res.status(status).json({
      type: "error",
      message,
      data,
    });
  });



InitiateMongoServer().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server active on http://localhost:${PORT}!`);
    })
})

