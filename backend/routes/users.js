import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//    res.send("Hello user, you are logged in!");
//});

//router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//    res.send("hello user, you are logged in and you can delete your account")
//});

//router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//    res.send("hello admin, you are logged in and you can delete all the accounts")
//});

//UPDATE
router.put("/:id", verifyAdmin, updateUser);

//DELETE
router.delete("/:id", verifyAdmin, deleteUser);
router.delete("/allusers/:id", verifyAdmin, deleteUser);

//GET
router.get("/:id", verifyAdmin, getUser);

//GETALL
router.get("/", verifyAdmin, getUsers);
router.get("allusers/", verifyAdmin, getUsers);

export default router