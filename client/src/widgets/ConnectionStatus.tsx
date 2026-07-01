import { useEventsStore } from "../store/eventStore";

export const ConnectionStatus = () => {
    const connected = useEventsStore((s) => s.connected);

    return (
        <div className="connection-status" role="status" aria-live="polite">
            <span className={`status-indicator ${connected ? "connected" : "disconnected"}`} />
            <span className="status-text">
                {connected ? "🟢 Connected" : "🔴 Disconnected"}
            </span>
        </div>
    );
};