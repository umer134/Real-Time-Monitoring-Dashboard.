export type EventType = "info" | "warning" | "error";

export interface SystemEvent {
    id: string;
    level: EventType;
    message: string;
    timeStamp: number;
}