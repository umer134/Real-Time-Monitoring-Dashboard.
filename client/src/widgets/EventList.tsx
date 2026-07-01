import { useEventsStore } from "../store/eventStore";
import { useEffect, useRef } from "react";

export const EventList = () => {
  const events = useEventsStore((s) => s.events);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [events]);

  return (
    <section className="event-log-container">
      <div className="event-log-header">
        <h2 className="event-log-title">Event Log</h2>
        <span className="event-log-count">
          {events.length} events
        </span>
      </div>

      <div
        ref={ref}
        className="event-log"
        aria-label="Event log"
        aria-live="polite"
      >
        {events.map((e) => (
          <div
            key={e.id}
            className={`event-item event-${e?.level?.toLowerCase()}`}
          >
            <span className="event-time">
              [{new Date(e.timeStamp).toLocaleTimeString()}]
            </span>

            <span className="event-level">
              {e.level}
            </span>

            <span className="event-message">
              {e.message}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};