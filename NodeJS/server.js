const express = require("express");
const { MongoClient } = require("mongodb");

const server = express();
const env = require("dotenv");
env.config();
server.use(express.json());
const PASSWORD = process.env.PASSWORD;

async function main() {
  const uri = `mongodb+srv://PBT:${PASSWORD}@cluster0.ahmbuv5.mongodb.net/test`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await createMultipleListings(client, [
      {
        name: "Lovely place",
        summary: "a charming loft in paris",
        bedrooms: 9,
        bathrooms: 0,
      },
      {
        name: "Tavern",
        summary: "a charming loft in paris",
        bedrooms: 7,
        bathrooms: 9,
      },
      {
        name: "pub",
        summary: "a charming loft in paris",
        bedrooms: 54,
        bathrooms: 7,
      },
      {
        name: "mansion",
        summary: "a charming loft in paris",
        bedrooms: 5,
        bathrooms: 4,
      },
    ]);
    await createListing(client, {
      name: "Lovely Loft",
      summary: "a charming loft in paris",
      bedrooms: 1,
      bathrooms: 1,
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
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listings created with the following id(s)`
  );
  console.log(result.insertedIds)
}

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
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

