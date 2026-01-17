import { create } from "zustand";
import type { SystemEvent } from "../shared/types/event";

interface EventState {
    events: SystemEvent[];
    connected: boolean;

    addEvent: (event: SystemEvent) => void;
    setConnected: (status: boolean) => void;
}

const MAX_EVENTS = 500;

export const useEventsStore = create<EventState>((set) => ({
    events: [],
    connected: false,
    addEvent: (event) => 
        set((state) => ({
            events: [...state.events, event].slice(-MAX_EVENTS),
        })),
        setConnected: (status) => set({connected: status}),
}));