"use strict";
// J'utilise le system de modules => exporter dans un fichier, importer dans un autre
// Avec node js la syntaxe est :
// exports.portReseau =4200;
// exports.messageServerLance="Le server est lancé";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageServerLance = exports.portReseau = void 0;
exports.portReseau = 4200;
exports.messageServerLance = "Le server est lancé";
exports.default = {
    portReseau: exports.portReseau,
    messageServerLance: exports.messageServerLance
};
//# sourceMappingURL=variables.js.map