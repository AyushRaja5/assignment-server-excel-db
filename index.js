import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToMongo from './database.js';
import usersRoute from './routes/usersDataRoute.js'
const app = express();
const PORT = process.env.PORT || 3000;

connectToMongo() // Connect to MongoDB

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Default route
app.get('/', (req, resp) => {
    resp.status(200).send("Welcome to Ayush MEAN journey")
})

// Routes
app.use('/', usersRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
