const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.sessions = {};
require("./routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
