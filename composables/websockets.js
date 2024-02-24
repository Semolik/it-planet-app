const useWebsocket = (url, onMessage) => {
    let disconnect;
    let timer;
    const disconnectWrapper = () => {
        if (disconnect) {
            disconnect();
        }
    };

    const connect = () => {
        const ws = new WebSocket(url);

        ws.addEventListener("open", () => {
            console.log("WebSocket Connected!");
        });

        let closingManually = false;

        ws.onmessage = onMessage;

        ws.onclose = (e) => {
            if (closingManually) {
                return;
            }
            console.log(
                "Socket is closed. Reconnect will be attempted in 1 second.",
                e.reason
            );
            timer = setTimeout(() => {
                disconnect = connect();
            }, 1000);
        };

        ws.onerror = (err) => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };

        return () => {
            console.log("Closing socket");
            closingManually = true;
            clearTimeout(timer);
            ws.close();
        };
    };

    disconnect = connect();

    return { disconnect: disconnectWrapper, connect };
};

export { useWebsocket };
