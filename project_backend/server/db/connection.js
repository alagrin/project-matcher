const mongoose = require("mongoose");
const user = require("../models/user");
const url = "mongodb://127.0.0.1:27017";

const dbName = "project_matcher";
let db;

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      return console.log(err);
    }
  // worked to create dbname and add the collection
    mongoose.createConnection(url + "/" + dbName).createCollection("Users");

    console.log(`Connected to MongoDb: ${url}`);
    console.log(`Database: ${dbName}`);
  }
);

// async function main() {
//   const uri =
//     "mongodb+srv://alagrin:Gsana123!@pmcluster.q1rhy.mongodb.net/test?retryWrites=true&w=majority";

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     await createListing(client, {
//       name: "Lovely Loft",
//       summary: "A charming apartment in the forest",
//       bedrooms: 2,
//       bathrooms: 1,
//     });
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// async function createListing(client, newListing) {
//   const result = await client
//     .db("sample_airbnb")
//     .collection("listingsAndReviews")
//     .insertOne(newListing);

//   console.log(`New listing added: ${result.insertedId}`);
// }

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// main().catch(console.error);
