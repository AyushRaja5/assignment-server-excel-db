import express from 'express';
import DummyData from '../models/UsersDataSchema.js';

const router = express.Router();

// Route for uploading Excel data
router.post('/upload', async (req, res) => {
    try {
        const jsonData = req.body.excelData; // Extract Excel data from the request body

        const concurrencyLimit = 10;
        const insertedDataBatches = [];

        // Insert data in batches of 10 to the 'ayushData' collection total data 100.
        for (let i = 0; i < jsonData.length; i += concurrencyLimit) {
            const batchSlice = jsonData.slice(i, i + concurrencyLimit);
            console.log(batchSlice);
            console.log("-------------------------------");
            const result = await DummyData.insertMany(batchSlice);
            insertedDataBatches.push(result);
        }

        res.json(insertedDataBatches);
    } catch (err) {
        console.log(err);
        res.status(400).json({ errors: err });
    }
});

// Route for fetching all users
router.get('/getallusers', async(req, resp)=>{
    try{
        const userdata =  await DummyData.find({})  // Retrieve all user data from DB
        resp.json(userdata)
    }
    catch(error){
        console.log(error);
        resp.status(400).send('Internal Error')
    }
})

export default router;
