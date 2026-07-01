import { useEffect } from "react";
import { createSocket } from "./socket";
import { useEventsStore } from "../store/eventStore";
import type { SystemEvent } from "../shared/types/event";

export const useWebSocket = () => {
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

    socket.onerror = () => {
        console.error("WebSocket error occurred");
    }

    socket.onmessage = (event) => {
      try {
        const data: SystemEvent = JSON.parse(event.data);
        addEvent(data);
      } catch (e) {
        console.error("Failed to parse event data:", e);
      }
    };
      
      return () => socket.close();
  }, []);
};