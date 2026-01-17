import { useEventsStore } from "../store/eventStore";
import { useEffect, useRef } from "react";

export const EventList = () => {
    const events = useEventsStore((s) => s.events);
    console.log(events)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollTo({
            top: ref.current.scrollHeight,
        });
    }, [events]);

    return (
        <div
            ref={ref}
            style={{
                width: 800,
                height: 300,
                overflowY: "auto",
                border: "1px solid #444",
                fontFamily: "monospace"
            }}
        >
            {events.map((e) => (
                <div key={e.id}>
                    [{new Date(e.timeStamp).toLocaleDateString()}]{" "}
                    <strong>{e.level}</strong> - {e.message}
                </div>
            ))}
        </div>
    )
};