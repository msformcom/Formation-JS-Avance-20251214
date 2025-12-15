// Je charge dans la  constante express le contenu exporté dans le package "express"
const express=require("express");

// Import des exports du fichier variables.js
const {portReseau,messageServerLance}=require("./variables");


// Créer l'objet server
const app=express();

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