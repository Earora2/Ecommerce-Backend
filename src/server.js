const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

const mongodbHost = process.env.MONGODB_HOST;
const mongodbPort = process.env.MONGODB_PORT;

mongoose.connect(`mongodb://${mongodbHost}:${mongodbPort}/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.get("/", function (req, res) {
  res.send("Hello World");
});

const UserRoutes = require("./routes/user_routes");
app.use('/api/user', UserRoutes);
const CategoryRoutes = require("./routes/category_routes");
app.use("/api/category", CategoryRoutes);

const ProductRoutes = require("./routes/product_routes");
app.use("/api/product", ProductRoutes);


const cartRoutes = require("./routes/cart_routes");
app.use("/api/cart", cartRoutes);


const orderRoutes = require("./routes/order_routes");
app.use("/api/order", orderRoutes);


module.exports = app;

const PORT = process.env.NODEJS_PORT;
app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`));
