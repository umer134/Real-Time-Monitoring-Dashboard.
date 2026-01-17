import { EventService } from "./event.service";
import { MonitoringEvent, EventLevel } from "./event.types";
import crypto from "crypto";

const messages = [
    "Request processed",
    "Database response slow",
    "Service unavailable",
    "User action detected"
];

function randomLevel(): EventLevel {
    const leveles: EventLevel[] = ["info", "warning", "error"];
    return leveles[Math.floor(Math.random() * leveles.length)]; 
}

export function startEventGenerator(service: EventService) {
    setInterval(() => {
        const event: MonitoringEvent = {
            id: crypto.randomUUID(),
            level: randomLevel(),
            message: messages[Math.floor(Math.random() * messages.length)],
            timeStamp: Date.now(),
        };

        service.publish(event);
    }, 500);
}

