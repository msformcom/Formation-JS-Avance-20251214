// J'utilise le system de modules => exporter dans un fichier, importer dans un autre
// Avec node js la syntaxe est :
// exports.portReseau =4200;
// exports.messageServerLance="Le server est lancé";

export const portReseau = 4200;

export const messageServerLance = "Le server est lancé";

export default {
    portReseau,
    messageServerLance
}