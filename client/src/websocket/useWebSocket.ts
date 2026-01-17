import { useEffect } from "react";
import { createSocket } from "./socket";
import { useEventsStore } from "../store/eventStore";
import type { SystemEvent } from "../shared/types/event";

export const useWebSocket = () => {
    console.log('hook called')
    const addEvent = useEventsStore((s) => s.addEvent);
    const setConnected = useEventsStore((s) => s.setConnected);

    useEffect(() => {
        const socket = createSocket();

        socket.onopen = () => {
            setConnected(true);
        };

        socket.onclose = () => {
            setConnected(false);
        }

        socket.onmessage = (event) => {
            const data: SystemEvent = JSON.parse(event.data);
            addEvent(data);
        };
        
        return () => socket.close();
    }, []);
};