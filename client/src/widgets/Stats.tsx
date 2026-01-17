import { useEventsStore } from "../store/eventStore";
import { useMemo } from "react";

export const Stats = () => {
    const events = useEventsStore((s) => s.events);
    console.log('events:', events)
    const stats = useMemo(() => {
        let info = 0;
        let warn = 0;
        let error = 0;

        for (const e of events) {
            if(e.level === "info") info++;
            if(e.level === "warning") warn++;
            if(e.level === "error") error++;
        }

        return {
            total: events.length,
            info,
            warn,
            error
        };

    }, [events]);
    return (
        <div>
            <h3></h3>
            <div>Total:{stats.total}</div>
            <div>INFO:{stats.info}</div>
            <div>WARN:{stats.warn}</div>
            <div>ERROR:{stats.error}</div>
        </div>
    )
};