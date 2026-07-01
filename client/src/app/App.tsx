import { useWebSocket } from "../websocket/useWebSocket";
import { ConnectionStatus } from "../widgets/ConnectionStatus";
import { EventList } from "../widgets/EventList";
import { Stats } from "../widgets/Stats";
import "../App.css";

export const App = () => {
  useWebSocket();

  return (
    <div className="app-container">
      <header>
        <h1>System Event Dashboard</h1>
        <p className="subtitle">Real-time event monitoring</p>
      </header>
      
      <main className="app-main">      
        <ConnectionStatus />
        <Stats />
        <EventList />
      </main>
    </div>
  )
};