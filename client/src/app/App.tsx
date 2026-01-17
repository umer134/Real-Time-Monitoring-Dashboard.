import { useWebSocket } from "../websocket/useWebSocket";
import { ConnectionStatus } from "../widgets/ConnectionStatus";
import { EventList } from "../widgets/EventList";
import { Stats } from "../widgets/Stats";

export const App = () => {
  useWebSocket();

  return (
    <div>
      <ConnectionStatus />
      <Stats />
      <EventList />
    </div>
  )
};