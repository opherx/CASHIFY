const express = require("express");
const bodyParser = require("body-parser")
const routes = require("./Routes/routes");
const { sequelize, testSequelizeConnection} = require("./db/settings/config");
const User = require("./db/models/userModel");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", routes);
var urlencodedParser = bodyParser.urlencoded({extended: false})

testSequelizeConnection();


// Sync the 'users' model with the database
User.sync({ force: false })
  .then(() => {
    console.log('Table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });

  app.post('/signup', urlencodedParser, async (req,res) => {
    try {
      const newUser = User.create({
        username: req.body.username,
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone_num: req.body.phonenum,
        reference: req.body.reference,
        coupon: req.body.coupon,
        balance: 2500,
      });
  
      console.log(newUser);
      res.redirect('/dashboard');
    }  catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' });
    }  
  })

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
