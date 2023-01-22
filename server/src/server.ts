import fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./lib/routes";

const app = fastify();

//Add origins as necessary
app.register(cors);
app.register(appRoutes)

app.listen({
    port:3333,
}).then(()=> {
    console.log('HTTP Server runnning')
})