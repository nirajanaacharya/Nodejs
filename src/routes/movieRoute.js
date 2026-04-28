import express from "express"

const router = express.Router();

router.get("/",(req ,res)=>{
    res.json({Message: "Suman get that thing for me."})
});

router.post("/",(req ,res)=>{
    res.json({Message: "Suman post this video."})
});

router.put("/",(req ,res)=>{
    res.json({Message: "Suman just put it down."})
});

router.delete("/",(req ,res)=>{
    res.json({Message: "Suman is deleted from this world."})
});

export default router;