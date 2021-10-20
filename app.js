const express = require("express")
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

dotenv.config()

// db connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true}).then(() => console.log("DB connected"))
mongoose.connection.on('error', err=>{
    console.log(`Db connection error: ${err.message}`);
});

const port = process.env.PORT || 8080;

// bringin routes
const postRoutes = require("./routes/post");

// node is like an event loop, we have to write the next method at the end of the middleware function we made so that it won't stuck in that function.
// const myOwnMiddleware = (req, res, next)=>{
//     console.log("this is my middleware!!");
//     next();

// }

// middleware
app.use(morgan('dev'));
// app.use(myOwnMiddleware);
app.use(express.json())
app.use(bodyParser.json());
app.use(expressValidator())
app.use('/',postRoutes);

app.listen(port, ()=>{
    console.log(`server listening to port ${port}`)
});
