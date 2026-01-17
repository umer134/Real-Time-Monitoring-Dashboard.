import { WebSocketServer } from "ws";
import { EventService } from "../events/event.service";

export function createWsServer(server: any, eventService: EventService) {
  const wss = new WebSocketServer({ server });
    
  wss.on("connection", (ws) => {
    console.log("client connected");

    ws.send(JSON.stringify({
      id: crypto.randomUUID(),
      type: "INFO",
      message: "connected",
      timestamp: Date.now(),
    }));

    const handler = (event: any) => {
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify(event));
      }
    };

    const unsubscribe = eventService.subscribe(handler);

    ws.on("close", () => {
      console.log("client disconnected");
      unsubscribe();
    });
  });
}