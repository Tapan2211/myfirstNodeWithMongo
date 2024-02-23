require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const currencyRoute = require('./routes/currencies.route');
const userRoute = require('./routes/users.route');
const { verifyAuth } = require('./middlewares/verifyAuths');

const { blogsRoutes } = require('./routes/blogs.routes');

const port = 3001;
const DB_URI = "mongodb://localhost:27017/website"

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log("Conntect to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e))

//Authorizations middlewares
app.use(verifyAuth);
//Currency
app.use('/currencies', currencyRoute);
//Users
app.use('/users', userRoute);
//Blogs
app.use('/blogs', blogsRoutes);


app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});
