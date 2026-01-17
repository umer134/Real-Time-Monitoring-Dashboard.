export type EventLevel = "info" | "warning" | "error";

export interface MonitoringEvent {
    id: string;
    level: EventLevel;
    message: string;
    timeStamp: number;
}