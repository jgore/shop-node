const express = require("express");
const keys = require("./config/keys");
const connectToDb = require("./config/connectToDb");
const app = express();
const cors = require("cors");

connectToDb(keys.mongoURI);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/pagesRoutes")(app);

app.listen(5000, function() {
  console.log("shop-node is listening on port 5000");
});
