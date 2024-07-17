const express = require("express");
const cors = require("cors");
const { MongoClient } = require('mongodb');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json()); // This line is added to parse JSON body payloads

// Connection URL and Database Name
const url = 'mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'Books';
const collectionName = 'myCollection';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(data) {
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


app.get("/retrieve", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const data = await collection.find({}).toArray(); // Retrieve all documents
        res.status(200).json(data);
    } catch (err) {
        console.error('Error retrieving data: ', err);
        res.status(500).send('Error retrieving data');
    } finally {
        await client.close();
    }
});

app.listen(5001);