import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    photos:{
        type: String,
    },
    title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    rooms:{
        type: Number,
    },
    cheapestPrice:{
        type: Number,
        required:true,
    },
});

export default mongoose.model("Hotel", HotelSchema);