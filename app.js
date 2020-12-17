const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const sequelize = require("./util/database");

const app = express();

var myStore = new SequelizeStore({
  db: sequelize,
});

app.use(bodyParser.json());

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: false
}));

myStore.sync();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
