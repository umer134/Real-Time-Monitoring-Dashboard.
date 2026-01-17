import { MonitoringEvent } from "./event.types";
import { EventStore } from "./event.store";

type Subscriber = (event: MonitoringEvent) => void;

export class EventService {
    private subscribers: Subscriber[] = [];

    constructor(private readonly store: EventStore) {}

    publish(event: MonitoringEvent) {
        this.store.add(event);
        this.subscribers.forEach((cb) => cb(event));
    }

    subscribe(cb: Subscriber) {
        this.subscribers.push(cb);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== cb);
        };
    }

    getHistory() {
        return this.store.getAll();
    }
}