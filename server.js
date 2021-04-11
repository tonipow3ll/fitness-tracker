const path = require('path')
const express = require("express");
const exphbs = require('express-handlebars')
const mongoose = require("mongoose");
require('dotenv').config({ path: '.env'})

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.set('views', path.join(__dirname, 'views'))
// app.engine('handlebars', exphbs({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

app.use('/exercise', require('./controller/apiroutes'))
app.use('/', require('./controller/htmlroutes'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// // routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// add routes
// html routes
// check how they have fetch/post
    // api/routes/stuffhere