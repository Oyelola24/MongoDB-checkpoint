// MongoDB CRUD Operations Checkpoint

// Connect to MongoDB Atlas
const { MongoClient, ObjectId } = require('mongodb');
// MongoDB Atlas connection string - replace with your own connection string
const url = 'mongodb+srv://demo:demo@cluster0.mongodb.net/contact?retryWrites=true&w=majority';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // Connect to MongoDB server
        await client.connect();
        console.log('Connected to MongoDB server');

        // Create database called "contact"
        const db = client.db('contact');
        console.log('Database "contact" created or accessed');

        // Create collection called "contactlist"
        const collection = db.collection('contactlist');
        console.log('Collection "contactlist" created or accessed');

        // Clear any existing data (for testing purposes)
        await collection.deleteMany({});
        console.log('Collection cleared for fresh start');

        // Insert documents in "contactlist"
        const documents = [
            { lastName: 'Ben', firstName: 'Moris', email: 'ben@gmail.com', age: 26 },
            { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
            { lastName: 'Emilie', firstName: 'brouge', email: 'emilie.b@gmail.com', age: 40 },
            { lastName: 'Alex', firstName: 'brown', age: 4 },
            { lastName: 'Denzel', firstName: 'Washington', age: 3 }
        ];

        const insertResult = await collection.insertMany(documents);
        console.log(`${insertResult.insertedCount} documents inserted`);
        console.log('Inserted document IDs:', insertResult.insertedIds);

        // Store the first document ID for later use
        const firstDocumentId = insertResult.insertedIds[0];

        // Display all of the contacts list
        console.log('\n1. Display all contacts:');
        const allContacts = await collection.find({}).toArray();
        console.log(allContacts);

        // Display information about only one person using his ID
        console.log('\n2. Display one contact by ID:');
        const oneContact = await collection.findOne({ _id: firstDocumentId });
        console.log(oneContact);

        // Display all contacts with age > 18
        console.log('\n3. Display all contacts with age > 18:');
        const adultContacts = await collection.find({ age: { $gt: 18 } }).toArray();
        console.log(adultContacts);

        // Display all contacts with age > 18 and name containing "ah"
        console.log('\n4. Display contacts with age > 18 and name containing "ah":');
        const filteredContacts = await collection.find({
            age: { $gt: 18 },
            $or: [
                { firstName: { $regex: 'ah', $options: 'i' } },
                { lastName: { $regex: 'ah', $options: 'i' } }
            ]
        }).toArray();
        console.log(filteredContacts);

        // Change contact's first name from "Kefi Seif" to "Kefi Anis"
        console.log('\n5. Change contact first name from "Kefi Seif" to "Kefi Anis":');
        const updateResult = await collection.updateOne(
            { lastName: 'Kefi', firstName: 'Seif' },
            { $set: { firstName: 'Anis' } }
        );
        console.log(`${updateResult.modifiedCount} document updated`);

        // Delete contacts aged under 5
        console.log('\n6. Delete contacts aged under 5:');
        const deleteResult = await collection.deleteMany({ age: { $lt: 5 } });
        console.log(`${deleteResult.deletedCount} documents deleted`);

        // Display all contacts after modifications
        console.log('\n7. Display all contacts after modifications:');
        const finalContacts = await collection.find({}).toArray();
        console.log(finalContacts);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('MongoDB connection closed');
    }
}

// Run the main function
main().catch(console.error);