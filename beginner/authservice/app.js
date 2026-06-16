const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*db connection included here */
require('dotenv').config();
const connectDB = require('./config/db');

app.use((req, res, next) => {
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Body:', req.body);
    next();
});
/*included all routes here */
require('./routes')(app)

connectDB();

const PORT = process.env.PORT || 3000;


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});