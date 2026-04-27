import express from "express"

const router = express.Router();

router.get("/",(req ,res)=>{
    res.json({Message: "Suman is Gayda."})
});
router.delete("/",(req ,res)=>{
    res.json({Message: "SUman is deleted from this world"})
});

export default router;