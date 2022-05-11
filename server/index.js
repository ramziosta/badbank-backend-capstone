const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Transaction = require("./models/transaction.model");
const routes = require("./routes/api");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost:27017/crispy", { useNewUrlParser: true,   useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(express.static(path.join(__dirname, '../Badbank/build')));

app.get('/', function(req, res){
 res.send('hello')
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.pwd, 10);
    await User.create({
      user: req.body.user,
      email: req.body.email,
      pwd: req.body.pwd,
      matchPwd: newPassword,
      accountType: req.body.accountType,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "error needs to be set according to validation" });
  }
});

app.post("/transaction", async (req, res) => {
  console.log(req.body);
  try {
   
    await Transaction.create({
      amount: req.body.amount,
      balance: req.body.balance,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "error needs to be set according to validation" });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    pwd: req.body.pwd,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(req.body.pwd, user.pwd);

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/account", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});

app.post("/account", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    await User.updateOne({ email: email }, { $set: { quote: req.body.quote } });

    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
