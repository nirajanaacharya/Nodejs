const express = require ("express");
const app = express();

import {config} from "dotenv";


app.get("/hello",(req,res)=>{
    res.json({Name : "NIRU"});
})


const PORT = 5001;
const Server = app.listen(PORT, () =>{
    console.log ( `Server is Running at ${PORT}`)
})

