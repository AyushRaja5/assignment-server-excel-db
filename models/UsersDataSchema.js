import mongoose from 'mongoose';

// Define a Mongoose schema with strict mode set to false
const UsersSchema = new mongoose.Schema({}, { strict: false });

// Create a Mongoose model named 'ayushData' based on the defined schema
const DummyData = mongoose.model('ayushData', UsersSchema);

export default DummyData;