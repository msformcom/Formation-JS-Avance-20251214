// J'importe le module express à partir de node_modules
// En fonction de tsconfig.json => module = commonjs => traduit en require(...)
import express from "express";
// Import à partir de variable
import {messageServerLance, portReseau} from "./variables";
import config from "./variables";
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

// Import des exports du fichier variables.js
//


// Créer l'objet server
const app=express();

// Création de notre server WebSocket
const server = createServer(app);

const wss = new WebSocketServer({ server });


let clientConnectes:{ws:any, nom?:string}[]=[];
wss.on('connection', function connection(ws) {
    console.log('New client connected');
    clientConnectes.push({ws:ws})
    ws.on('message', function message(data) {
        const messageText = data.toString();
        const obj=JSON.parse(messageText);
        if(obj.nom){
            console.log("Client connecté :"+obj.nom);
            clientConnectes.find(c=>c.ws==ws)!.nom=obj.nom
        }

        console.log('Received:', messageText);
        ws.send(`Echo: ${messageText}`);
    });

    ws.on('close', function close() {
        clientConnectes=clientConnectes.filter(c=>c.ws!=ws);
        console.log('Client disconnected');
    });
});

setInterval(() => {
    // J'envois le cours aux clients connectés
        for(let c of wss.clients){
            c.send(JSON.stringify({coursEuroDollar:Math.random()}));
        }
}, 1000);

// Middleware journalisation
app.use(async (req,res,next)=>{
    console.log("Url demandée : "+req.path);
    let time=Date.now();
    // Excecution des middleware qui suivent
    await next();
    let ms=Date.now()-time;
    //console.log("traité :" + req.path + " en "+ms +" ms");
    console.log(`Traitée : ${req.path} en ${ms} ms` );
})

app.get("/coursEuroDollar",(req,res)=>{
    res.send({coursEuroDollar:Math.random()})
})

// Demande au server de servir les fichiers du dossier wwwroot
app.use(express.static("wwwroot"));

// listen => fonction asynchrone
app.listen(portReseau,()=>{
    console.log(messageServerLance + "sur le port "+portReseau);
});

// Lancement sur le port voulu
server.listen(portReseau+1,()=>{
    console.log("Server websocket lancé");
})


console.log("Après exécution du listen qui n'attends pas que le serveur soit lancé pour rendre la main");