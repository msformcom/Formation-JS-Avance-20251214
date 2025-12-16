// J'importe le module express à partir de node_modules
// En fonction de tsconfig.json => module = commonjs => traduit en require(...)
import express from "express";
// Import à partir de variable
import {messageServerLance} from "./variables";
import config from "./variables";


// Import des exports du fichier variables.js
//


// Créer l'objet server
const app=express();

let a:number=6;

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

// Demande au server de servir les fichiers du dossier wwwroot
app.use(express.static("wwwroot"));

// listen => fonction asynchrone
app.listen(5000,()=>{
    console.log(messageServerLance);
});



console.log("Après exécution du listen qui n'attends pas que le serveur soit lancé pour rendre la main");