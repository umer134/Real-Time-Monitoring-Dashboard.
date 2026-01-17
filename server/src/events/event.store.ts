import { MonitoringEvent } from "./event.types";

export class EventStore {
    private events: MonitoringEvent[] = [];
    private readonly limit = 1000;

    add(event: MonitoringEvent) {
        this.events.push(event);

        if(this.events.length > this.limit) {
            this.events.shift();
        }
    }

    getAll(): MonitoringEvent[] {
        return this.events;
    }
}