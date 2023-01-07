const express = require("express");
const { MongoClient } = require("mongodb");
const server = express();
const env = require("dotenv");
env.config();
server.use(express.json());
const PASSWORD = process.env.PASSWORD;
server.use(require("cors")()); // allow Cross-domain requests
const EmployeeRoute = require('./routes/employee')
const LoginRoute = require('./routes/auth')


async function main() {
  const uri = `mongodb+srv://PBT:${PASSWORD}@cluster0.ahmbuv5.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const results = await client.db('PBT').collection('PB').find().toArray()

    // server.send('/laptop').get((req, res) => {
    //   client.find().then(sendLaptop => res.json(sendLaptop))
    // })

    server.get("/laptop", (req, res) => {
       res.send(results); // always responds with the string "TODO"
    });
    // await gettingData(client, {
    //   model: "HP",
    //   type: "laptop",
    // });
    console.log(results)

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
    await createListing(client, {
     
    });
    // await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

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

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name} `);
  });
}

const PORT = process.env.PORT || 3002;
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


server.use('/api', LoginRoute)
server.use('/api/employee', EmployeeRoute)
