import { AdditionOperation } from "./additionOperation";

export function calculLongEvent(a: number, b: number) {
    let resultat = new AdditionOperation();
    let worker = new Worker("../services/webWorkerAddition.js");
    worker.postMessage({ a, b });
    worker.addEventListener("message", (e) => {
        if (e.data.resultat != undefined) {
            resultat.dispatchResultat(e.data.resultat as number);
        }
        if (e.data.avancement != undefined) {
            resultat.dispatchAvancement(e.data.avancement as number);
        }

    })
    return resultat;
}