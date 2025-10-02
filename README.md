easy# MongoDB CRUD Operations Checkpoint

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using MongoDB, focusing on managing a contact list database.

## Project Overview

The checkpoint implements the following MongoDB operations:
- Creating a database called "contact"
- Creating a collection called "contactlist"
- Inserting documents with contact information
- Displaying contacts based on various criteria
- Updating contact information
- Deleting contacts based on specific conditions

## Setup Instructions

### Prerequisites
- Node.js installed on your system
- MongoDB installed locally or access to MongoDB Atlas

### Installation

1. Clone or download this repository
2. Install dependencies:
```
npm install
```

## Project Structure

- `mongodb_operations.js` - Main script for MongoDB operations with actual database connection
- `mongodb_demo.js` - Demonstration script showing expected outputs without requiring a database connection
- `package.json` - Project dependencies

## MongoDB Operations Implemented

1. **Create Operations**
   - Create a database called "contact"
   - Create a collection called "contactlist"
   - Insert documents with contact information

2. **Read Operations**
   - Display all contacts in the list
   - Display information about one person using their ID
   - Display all contacts with age > 18
   - Display contacts with age > 18 and name containing "ah"

3. **Update Operations**
   - Change contact's first name from "Kefi Seif" to "Kefi Anis"

4. **Delete Operations**
   - Delete contacts aged under 5

## Running the Demo

To run the demonstration script that shows all operations with sample data:

```
node mongodb_demo.js
```

## Taking Screenshots

As required by the checkpoint, take screenshots of each operation's output from the terminal. The demonstration script provides clear section headers that make it easy to capture each required operation:

1. Creating database and collection
2. Inserting documents
3. Displaying all contacts
4. Displaying one contact by ID
5. Displaying contacts with age > 18
6. Displaying contacts with age > 18 and name containing "ah"
7. Updating contact name
8. Deleting contacts aged under 5
9. Displaying final contact list

## Sample Data

The project uses the following sample contacts:
- Last name: Ben, First name: Moris, Email: ben@gmail.com, age: 26
- Last name: Kefi, First name: Seif, Email: kefi@gmail.com, age: 15
- Last name: Emilie, First name: brouge, Email: emilie.b@gmail.com, age: 40
- Last name: Alex, First name: brown, age: 4
- Last name: Denzel, First name: Washington, age: 3