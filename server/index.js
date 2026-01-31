import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/user.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/", userRouter);
app.get("/", (req, res) => {
  res.send("calling!!");
  console.log("api call:");
});

app.use(function (error, req, res, next) {
  // Handle the error
  if(error?.statusCode && error.body){
    return res.status(error?.statusCode).send({
      success: false,
      mes: error.body,
      error: error,
    });
  }
  res.status().send({
    success: false,
    mes: error.body,
    error: error,
  });
});

await mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("mongoes connect successfully");
    app.listen(5001, async () => {
      console.log("running port:", 5001);
    });
  })
  .catch((err) => {
    console.log("error:", err);
  });
