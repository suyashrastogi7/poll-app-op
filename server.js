const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./DB/connection");
const answerModel = require("./Models/answer");

const app = express();

app.listen(process.env.PORT || 5001, () => {
  console.log("Server Started");
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", () => {
  console.log("server started");
});

app.post("/api/send_response", async function (req, res) {
  db();
  const data = req.body;
  console.log(data);
  if (data.A) {
    try {
      await answerModel.findOneAndUpdate(
        { option: "A" },
        {
          $inc: {
            value: 1,
          },
        }
      );
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  } else if (data.B) {
    try {
      await answerModel.findOneAndUpdate(
        { option: "B" },
        {
          $inc: {
            value: 1,
          },
        }
      );
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  } else {
    try {
      await answerModel.findOneAndUpdate(
        { option: "C" },
        {
          $inc: {
            value: 1,
          },
        }
      );
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  }
});
