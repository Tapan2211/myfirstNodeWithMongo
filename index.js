require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const currencyRoute = require('./routes/currencies.routes');
const userRoute = require('./routes/users.routes');
const { verifyAuth } = require('./middlewares/verifyAuths');

const blogsRoutes = require('./routes/blogs.routes');

const port = 3001;
// const DB_URI = "mongodb://localhost:27017/website"
const DB_URI = "mongodb+srv://tghataliya:E7ggVYwathvcZjcB@cluster0.mkznogx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect(`${DB_URI}`)
  // .connect("mongodb+srv://tghataliya:E7ggVYwathvcZjcB@cluster0.mkznogx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conntect to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e))


//Authorizations middlewares
// app.use(verifyAuth);
//Add parse
app.use(express.json())
//Currency
app.use('/currencies', currencyRoute);
//Users
app.use('/users', userRoute);
//Blogs
app.use('/blogs', blogsRoutes);


app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});
