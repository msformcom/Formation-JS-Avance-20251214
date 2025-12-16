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
// Import des exports du fichier variables.js
//
// Créer l'objet server
const app = (0, express_1.default)();
let a = 6;
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
// Demande au server de servir les fichiers du dossier wwwroot
app.use(express_1.default.static("wwwroot"));
// listen => fonction asynchrone
app.listen(5000, () => {
    console.log(variables_1.messageServerLance);
});
console.log("Après exécution du listen qui n'attends pas que le serveur soit lancé pour rendre la main");
//# sourceMappingURL=server.js.map