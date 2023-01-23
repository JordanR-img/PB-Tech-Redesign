const express = require("express");
const { MongoClient } = require("mongodb");
const server = express();
const env = require("dotenv");
env.config();
const cors = require("cors");
server.use(express.json());
const PASSWORD = process.env.PASSWORD;
server.use(require("cors")()); // allow Cross-domain requests
const corsOptions = {
  origin: "http://localhost:4444", // replace with your frontend's URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}
server.use(cors(corsOptions));
const EmployeeRoute = require("../Backend/Auth/auth");
const LoginRoute = require("../Backend/Auth/routes/auth");

const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");

server.use(cookieParser());
// async function main() {
// const uri = `mongodb+srv://PBT:${PASSWORD}@cluster0.ahmbuv5.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri);
// mongoose.set("strictQuery", false),
// mongoose
//   .connect('mongodb+srv://PBT:rhQhpPMAB3ZQTqi@cluster0.ahmbuv5.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
mongoose.set("strictQuery", false),
  mongoose
    .connect(
      Process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));

const { adminAuth, userAuth } = require("./Auth/auth");

server.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
server.get("/basic", userAuth, (req, res) => res.send("User Route"));
server.set("view engine", "ejs");
server.get("/", (req, res) => res.render("home"));
server.get("/register", (req, res) => res.render("register"));
server.get("/login", (req, res) => res.render("login"));
server.get("/admin", adminAuth, (req, res) => res.render("admin"));
server.get("/basic", userAuth, (req, res) => res.render("user"));

server.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
// try {
//   await client.connect();

// const results = await client.db('PBT').collection('PB').find().toArray()

// server.send('/laptop').get((req, res) => {
//   client.find().then(sendLaptop => res.json(sendLaptop))
// })

// server.get("/laptop", (req, res) => {
//    res.send(results); // always responds with the string "TODO"
// });
// await gettingData(client, {
//   model: "HP",
//   type: "laptop",
// });
// console.log(results)

// await createMultipleListings(client, [
//   {
//
//   },
//   {
//     name: "Tavern",
//     summary: "a charming loft in paris",
//     bedrooms: 7,
//     bathrooms: 9,
//   },
//   {
//     name: "pub",
//     summary: "a charming loft in paris",
//     bedrooms: 54,
//     bathrooms: 7,
//   },
//   {
//     name: "mansion",
//     summary: "a charming loft in paris",
//     bedrooms: 5,
//     bathrooms: 4,
//   },
// ]);
// await createListing(client, {

// });
// await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("PBT")
    .collection("Carousel")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listings created with the following id(s)`
  );
  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  const result = await client
    .db("PBT")
    .collection("Carousel")
    .insertOne(newListing);

  console.log(`new listing created with the following id ${result.insertedId}`);
}

// main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name} `);
  });
}

const PORT = process.env.PORT || 4040;
server.listen(PORT, () => {
  console.log("I'm listening on port", PORT);
});

// server.get("/", (req, res) => {
//   res.send("Home sweet home 🏚"); // always responds with the string "TODO"
// });

// server.get("/", (req, res) => {
//   const client = new MongoClient(uri);
//   const results = client.db('PBT').collection('PB').find().toArray()
//   res.send(results); // always responds with the string "TODO"
// });
async function gettingData(client, newComputer) {
  // const cursor = client.collection('PB database').find({ status: 'HP' });

  const result = await client.db("PBT").collection("PB").insertOne(newComputer);
  console.log(`new listing created with the following id ${result.insertedId}`);
  // console.log(client.db('PBT').collection('PB database'))
  // console.log(cursor)
}

server.set("/api", LoginRoute);
server.set("/api/employee", EmployeeRoute);

server.use("/api/auth", require("./Auth/route"));
