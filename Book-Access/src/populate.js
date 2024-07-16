// const commerce = require("./lib/commerce")
// const bookModel = require("./Books");

// async function populate() {

//     const { data } = await commerce.products.list();

//     for (let i = 0; i < data.length; i++) {
//         try {
//             await bookModel.create({
//                 name: data[i].name,
//                 price: data[i].price.formatted_with_symbol,
//                 imageUrl: data[i].assets[0].url,
//                 description: data[i].description, // Ensure you include all required fields
//             });
//         } catch (error) {
//             console.error('Error creating book entry:', error);
//         }
//     }


// }

// populate();

const { MongoClient } = require('mongodb');
const  { commerce } = require ("./lib/commerce");
const fs = require('fs');

async function main() {
  const { data } = await commerce.products.list();

  
}
main();

// Your JSON data stored in a variable


// Connection URL and Database Name
const url = 'mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'BookStore';
const collectionName = 'myCollection';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert JSON data into the collection
    if (Array.isArray(data)) {
      await collection.insertMany(data);
      console.log('Data inserted successfully using insertMany');
    } else {
      await collection.insertOne(data);
      console.log('Data inserted successfully using insertOne');
    }
  } catch (err) {
    console.error('Error inserting data: ', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

run().catch(console.dir);
