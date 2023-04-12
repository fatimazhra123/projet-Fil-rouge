const path = require("path")
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require('./routers/user.js')
const employeeRouter = require('./routers/employee')
dotenv.config();

// set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

// connect to mongoDB
const uri=('mongodb+srv://cours:cours@cluster0.kkbmnv0.mongodb.net/test')
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to database!');
  // Any additional logic can be handled here
})
.catch(error => {
  console.log(`Error connecting to database: ${error.message}`);
});


// set up routes
app.use('/student', userRouter)
app.use('/employee', employeeRouter)

app.use('/uploads', express.static(path.join(__dirname, 'Frontend','public','uploads')))

if(process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build"))
}
