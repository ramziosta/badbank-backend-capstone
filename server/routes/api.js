const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Transaction = require("../models/transaction.model");


router.get("/", function (req, res) {
  User.find({})
    .then((data) => {
      console.log("data", data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.pwd, 10);
    await User.create({
      user: req.body.user,
      email: req.body.email,
      pwd: newPassword,
      matchPwd: req.body.matchPwd,
      accountType: req.body.accountType,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "error needs to be set according to validation" });
  }
});

router.post("/transaction", async (req, res) => {
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


router.get("/account", (req, res) => {
  res.send("<h1>hello</h1>");
});

module.exports = router;

