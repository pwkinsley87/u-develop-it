const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
// const mysql = require('mysql2');
// const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// //Connect to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         //Your MYSQL username,
//         user: 'root',
//         //Your MySQL password
//         password: 'Aboutthemshoes.',
//         database: 'election'
//     },

//     console.log('Connected to election database')
// );

// db.query(`SELECT * FROM candidates WHERE id = 1`, (row, err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, results) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//Default response for any other kind of request (Not Found)
app.use((req, res) => {
    res.status(404).end();
   });

//Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});