import express from "express";
import http from "http";
import { EventStore } from "./events/event.store";
import { EventService } from "./events/event.service";
import { startEventGenerator } from "./events/event.generator";
import { createWsServer } from "./websocket/wsServer";
import { createRoutes } from "./http/routes";

const app = express();
const server = http.createServer(app);

const store = new EventStore();
const eventService = new EventService(store);

app.use("/api", createRoutes(eventService));

createWsServer(server, eventService);
startEventGenerator(eventService);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});