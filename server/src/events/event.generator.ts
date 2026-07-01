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
    const levels: EventLevel[] = ["info", "warning", "error"];
    return levels[Math.floor(Math.random() * levels.length)]; 
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

