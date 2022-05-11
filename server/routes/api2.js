// app.post("/login", async (req, res) => {
//     const user = await User.findOne({
//       email: req.body.email,
//       pwd: req.body.pwd,
//     });
  
//     if (!user) {
//       return { status: "error", error: "Invalid login" };
//     }
  
//     const isPasswordValid = await bcrypt.compare(req.body.pwd, user.pwd);
  
//     if (isPasswordValid) {
//       const token = jwt.sign(
//         {
//           name: user.name,
//           email: user.email,
//         },
//         "secret123"
//       );
  
//       return res.json({ status: "ok", user: token });
//     } else {
//       return res.json({ status: "error", user: false });
//     }
//   });

//   app.post("/account", async (req, res) => {
//     const token = req.headers["x-access-token"];
  
//     try {
  
//       await User.updateOne({ email: email }, { $set: { quote: req.body.quote } });
  
//       return res.json({ status: "ok" });
//     } catch (error) {
//       console.log(error);
//       res.json({ status: "error", error: "invalid token" });
//     }
//   });