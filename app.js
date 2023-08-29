const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes/routes");
const connectDB = require("./db/connect");
// set up express
const app = express();

// middlewares
app.use(bodyParser.json());
app.use("/api", router);
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
// error handling middleware
app.use(function (err, req, res, next) {
  // console.log(err)
  res.status(422).send({ error: err._message });
});

// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// routes

const port = process.env.PORT || 5000;
//  connect to mongodb
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`App is listening at port:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
// app.listen(port,()=> console.log(`App is running on port ${port}`))
