const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//some stuff
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/api"));
app.use(require("./routes/todos"));
app.use(require("./routes/add"));
app.use(require("./routes/done"));
app.use(require("./routes/delete"));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
