import express from "express"
import {config} from "dotenv";
import {connectDB,disconnectDB} from "./config/db.js"
import router from "./routes/movieRoute.js"

config();
connectDB();

// To Gracefully handle the db error 

process.on("Unhandled Rejection", (err) =>{
    console.error("Unhandled Rejection!" , err);
    server.close(async()=>{
        await disconnectDB();
        process.exit(1);
    });
});

process.on("Uncaught expection", (err) =>{
    console.error("Uncaught expection" , err);
    server.close(async()=>{
        await disconnectDB();
        process.exit(1);
    });
});


process.on("SIGTERM", (err) =>{
    console.error("SIGTERM Recieved Shutting Down Gracefully");
    server.close(async()=>{
        await disconnectDB();
        process.exit(0);
    });
});


const app = express();

// ROUTE
app.use("/movies",router);

//PORT
const PORT = 5001;

//LISTEN TO SERVER
app.listen(PORT, () =>{
    console.log ( `Server is Running at ${PORT}`)
})

