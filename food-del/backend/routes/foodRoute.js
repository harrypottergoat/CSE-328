import express from "express"
import { addFood , listFood, removeFood} from "../controllers/foodcontroller.js"
import multer from "multer"
import fs from 'fs'

const foodRouter = express.Router();

//image store engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage:storage});


foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.get("/list",listFood)

foodRouter.post("/remove", removeFood)




export default foodRouter;