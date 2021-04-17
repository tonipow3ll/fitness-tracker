const path = require('path')
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config({ path: '.env'})

const PORT = process.env.PORT || process.env.MONGO_URI;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.set('views', path.join(__dirname, 'views'))

app.use('/exercise', require('./controller/apiroutes'))
app.use('/', require('./controller/htmlroutes'))

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// API routes
// html routes --- done? 3 files, 3 get routes
// check how they have fetch/post
    // api/routes/stuffhere
// seeds - current error "deleteMany is not a function"