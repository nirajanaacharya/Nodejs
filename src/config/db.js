import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient ({
    log : 
    process.NODE_ENV == "development" ? 
    ["query","error","warn"]: 
    ["error"],
})


const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected successfully!")
    } catch (error) {
        console.error(`Error occured : ${error.message} `)
        process.exit(1)
    }
    
}

const disconnectDB = async () => {
    await prisma.$disconnect()    
}

export {prisma,connectDB, disconnectDB};