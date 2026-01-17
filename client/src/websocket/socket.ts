export const createSocket = () => {
    return new WebSocket('ws://localhost:4000');
};