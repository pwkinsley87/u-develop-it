const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'pwkinsley87@gmail.com',
        //Your MySQL password
        password: 'Aboutthemshoes.',
        database: 'election'
    },

    console.log('Connected to election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

//Default response for any other kind of request (Not Found)
app.use((req, res) => {
    res.status(404).end();
   });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});