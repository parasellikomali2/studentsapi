const express = require("express");

const app = express();

const connectdb = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

//middleware
app.use(express.json());


//database connection
connectdb();


//routes
app.use("/", userRoutes);


app.listen(4000, () => {
    console.log("server started");
});