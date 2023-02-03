import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = fastify();
const port_server: number = 3333;

//Add origins as necessary
app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: port_server,
  })
  .then(() => {
    console.log(`HTTP Server runnning on port ${port_server}`);
  });
