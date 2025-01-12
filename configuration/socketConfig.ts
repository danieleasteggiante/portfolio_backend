import {Server, Socket} from "socket.io";

export const socketConfig = {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    }
}

const MAX_CONNECTIONS = 10;
let connectedClients = 0;

export function chatHandler(io: Server) {
    const chatNamespace = io.of("/api/chat");
    console.log('Chat handler attivato');
    if (connectedClients >= MAX_CONNECTIONS) {
        console.error('Troppi client connessi');
        return;
    }
    chatNamespace.on('connection', (socket) => {
        chatNamespace.emit('chat_message', 'nuovo utente arrivato...');
        connectedClients++;

        socket.on('chat_message', (msg) => {
            console.log('Messaggio ricevuto:', msg);
            chatNamespace.emit('chat_message', msg); // Invia il messaggio a tutti i client
        });

        socket.on('disconnect', (reason) => {
            console.log('Utente disconnesso:', socket.id, reason);
        });

        socket.on('error', (error) => {
            console.error('Errore socket:', socket.id, error);
        });
    })
}