import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body);
    console.log(newHotel)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        next(err);
    }
}

export const updateHotel = async (req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body },{ new: true });
        res.status(200).json(updatedHotel);
      } catch (err) {
        next(err);
      }
}

export const reserveRoomHotel = async (req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body },{ new: true });
        res.status(200).json(updatedHotel);
      } catch (err) {
        next(err);
      }
}

export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted...");
    } catch (err) {
        next(err);
    }
}

export const getHotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}

export const getHotels = async (req,res,next)=>{
    const {min,max, ...others }= req.query
    try {
        const hotels = await Hotel.find({...others, cheapestPrice:{$gt:min | 1,$lt:max || 999}});
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city});
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}

export const countByType = async (req,res,next)=>{
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"});
        const appartamentiCount = await Hotel.countDocuments({type:"appartamento"});
        const chaletCount = await Hotel.countDocuments({type:"chalet"});
        const bdCount = await Hotel.countDocuments({type:"bed and breakfast"});
        const motelCount = await Hotel.countDocuments({type:"motel"}); 

        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"appartamenti", count:appartamentiCount},
            {type:"chalet", count:chaletCount},
            {type:"bed and breakfast", count:bdCount},
            {type:"motel", count:motelCount},
        ]);
    } catch (err) {
        next(err);
    }
}