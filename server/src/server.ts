import fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const app = fastify();

//Add origins as necessary
app.register(cors);

const prisma=new PrismaClient();

app.get('/',async()=> {
    const habits=await prisma.habit.findMany();

    return habits
})

app.listen({
    port:3333,
}).then(()=> {
    console.log('HTTP Server runnning')
})