import { useEventsStore } from "../store/eventStore";
import { useMemo } from "react";

export const Stats = () => {
	const events = useEventsStore((s) => s.events);

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
		<div className="stats-container" role="region" aria-label="Event statistics">
			<h3 className="stats-title">Statistics</h3>
			<div className="stats-grid">
				<div className="stat-card stat-total">
					<div className="stat-label">Total</div>
					<div className="stat-value">{stats.total}</div>
				</div>
				<div className="stat-card stat-info">
					<div className="stat-label">ℹ️ Info</div>
					<div className="stat-value"> {stats.info}</div>
				</div>
				<div className="stat-card stat-warning">
					<div className="stat-label">⚠️ Warning</div>
					<div className="stat-value">{stats.warn}</div>
				</div>
				<div className="stat-card stat-error">
					<div className="stat-label">❌ Error</div>
					<div className="stat-value">{stats.error}</div>
				</div>
			</div>
		</div>
	)
};