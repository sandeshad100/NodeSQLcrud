const express = require("express");
const app = express();
const port = 3005;
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRouter");

//middleware start
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middleware end

app.use("/products", productRouter);
app.use("", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello Worldd!");
// });
// app.post("/", (req, res) => {
//   res.send("Hello Worldd!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});