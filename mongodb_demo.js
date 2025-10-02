// MongoDB CRUD Operations Demonstration
// This script shows the expected outputs for all required operations

console.log('===== MongoDB CRUD Operations Checkpoint =====');

// Simulating database and collection creation
console.log('\n1. Creating database "contact" and collection "contactlist"');
console.log('> Database "contact" created successfully');
console.log('> Collection "contactlist" created successfully');

// Simulating document insertion
console.log('\n2. Inserting documents into "contactlist"');
const documents = [
    { 
        _id: '507f1f77bcf86cd799439011',
        lastName: 'Ben', 
        firstName: 'Moris', 
        email: 'ben@gmail.com', 
        age: 26 
    },
    { 
        _id: '507f1f77bcf86cd799439012',
        lastName: 'Kefi', 
        firstName: 'Seif', 
        email: 'kefi@gmail.com', 
        age: 15 
    },
    { 
        _id: '507f1f77bcf86cd799439013',
        lastName: 'Emilie', 
        firstName: 'brouge', 
        email: 'emilie.b@gmail.com', 
        age: 40 
    },
    { 
        _id: '507f1f77bcf86cd799439014',
        lastName: 'Alex', 
        firstName: 'brown', 
        age: 4 
    },
    { 
        _id: '507f1f77bcf86cd799439015',
        lastName: 'Denzel', 
        firstName: 'Washington', 
        age: 3 
    }
];

console.log('> 5 documents inserted successfully');

// Display all contacts
console.log('\n3. Display all contacts:');
console.log(JSON.stringify(documents, null, 2));

// Display one contact by ID
console.log('\n4. Display one contact by ID (507f1f77bcf86cd799439011):');
console.log(JSON.stringify(documents[0], null, 2));

// Display contacts with age > 18
console.log('\n5. Display contacts with age > 18:');
const adultsOnly = documents.filter(doc => doc.age > 18);
console.log(JSON.stringify(adultsOnly, null, 2));

// Display contacts with age > 18 and name containing "ah"
console.log('\n6. Display contacts with age > 18 and name containing "ah":');
const filteredContacts = documents.filter(doc => 
    doc.age > 18 && 
    (doc.firstName.toLowerCase().includes('ah') || doc.lastName.toLowerCase().includes('ah'))
);
console.log(JSON.stringify(filteredContacts, null, 2));

// Update contact from "Kefi Seif" to "Kefi Anis"
console.log('\n7. Change contact first name from "Kefi Seif" to "Kefi Anis":');
const updatedDocuments = documents.map(doc => {
    if (doc.lastName === 'Kefi' && doc.firstName === 'Seif') {
        return { ...doc, firstName: 'Anis' };
    }
    return doc;
});
console.log('> 1 document updated');
console.log(JSON.stringify(updatedDocuments.find(doc => doc.lastName === 'Kefi'), null, 2));

// Delete contacts aged under 5
console.log('\n8. Delete contacts aged under 5:');
const remainingDocuments = updatedDocuments.filter(doc => !(doc.age < 5));
console.log('> 2 documents deleted');

// Display all contacts after modifications
console.log('\n9. Display all contacts after modifications:');
console.log(JSON.stringify(remainingDocuments, null, 2));

console.log('\n===== End of MongoDB CRUD Operations Demonstration =====');