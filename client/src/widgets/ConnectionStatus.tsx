import { useEventsStore } from "../store/eventStore";

export const ConnectionStatus = () => {
    const connected = useEventsStore((s) => s.connected);

    return (
        <div>
            Status: {connected ? "CONNECTED" : "DISCONNECTED"}
        </div>
    );
};