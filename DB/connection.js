const mongoose = require("mongoose");
const connection = () => {
  mongoose.connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("connected", () => {
    console.log("Connected to DB");
  });
  db.on("error", () => {
    console.log("Error connecting to DB");
  });
};
module.exports = connection;
