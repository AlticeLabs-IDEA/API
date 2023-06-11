require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Database");
    app.listen(process.env.PORT, () => {
      console.log("Server Started");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

const userRouter = require("./controllers/user_collection.js");
const departmentRouter = require("./controllers/department_collection.js");
const organizationRouter = require("./controllers/organization_collection.js");
const questionRouter = require("./controllers/question_collection.js");
const answerRouter = require("./controllers/answer_collection.js");
const suggestionRouter = require("./controllers/suggestion_collection.js");

app.use("/user", userRouter);
app.use("/organization", organizationRouter);
app.use("/question", questionRouter);
app.use("/department", departmentRouter);
app.use("/answer", answerRouter);
app.use("/suggestion", suggestionRouter);

