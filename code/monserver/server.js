"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// J'importe le module express à partir de node_modules
// En fonction de tsconfig.json => module = commonjs => traduit en require(...)
const express_1 = __importDefault(require("express"));
// Import à partir de variable
const variables_1 = require("./variables");
const http_1 = require("http");
const ws_1 = require("ws");
// Import des exports du fichier variables.js
//
// Créer l'objet server
const app = (0, express_1.default)();
// Création de notre server WebSocket
const server = (0, http_1.createServer)(app);
const wss = new ws_1.WebSocketServer({ server });
let clientConnectes = [];
wss.on('connection', function connection(ws) {
    console.log('New client connected');
    clientConnectes.push({ ws: ws });
    ws.on('message', function message(data) {
        const messageText = data.toString();
        const obj = JSON.parse(messageText);
        if (obj.nom) {
            console.log("Client connecté :" + obj.nom);
            clientConnectes.find(c => c.ws == ws).nom = obj.nom;
        }
        console.log('Received:', messageText);
        ws.send(`Echo: ${messageText}`);
    });
    ws.on('close', function close() {
        clientConnectes = clientConnectes.filter(c => c.ws != ws);
        console.log('Client disconnected');
    });
});
setInterval(() => {
    // J'envois le cours aux clients connectés
    for (let c of wss.clients) {
        c.send(JSON.stringify({ coursEuroDollar: Math.random() }));
    }
}, 1000);
// Middleware journalisation
app.use(async (req, res, next) => {
    console.log("Url demandée : " + req.path);
    let time = Date.now();
    // Excecution des middleware qui suivent
    await next();
    let ms = Date.now() - time;
    //console.log("traité :" + req.path + " en "+ms +" ms");
    console.log(`Traitée : ${req.path} en ${ms} ms`);
});
app.get("/coursEuroDollar", (req, res) => {
    res.send({ coursEuroDollar: Math.random() });
});
// Demande au server de servir les fichiers du dossier wwwroot
app.use(express_1.default.static("wwwroot"));
// listen => fonction asynchrone
app.listen(variables_1.portReseau, () => {
    console.log(variables_1.messageServerLance + "sur le port " + variables_1.portReseau);
});
// Lancement sur le port voulu
server.listen(variables_1.portReseau + 1, () => {
    console.log("Server websocket lancé");
});
console.log("Après exécution du listen qui n'attends pas que le serveur soit lancé pour rendre la main");
//# sourceMappingURL=server.js.map