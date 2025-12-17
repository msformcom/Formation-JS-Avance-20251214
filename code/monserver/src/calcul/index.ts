import { calculLongEvent } from "../services/calculLongEvent";
import { additionAsync } from "../services/calculLongPromise";

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#btn_calcul")! as HTMLButtonElement;
    let inputA = document.querySelector("#a")! as HTMLInputElement;
    let inputB = document.querySelector("#b")! as HTMLInputElement;
    let divResultat = document.querySelector("#div_resultat")! as HTMLDivElement;

    button.addEventListener("click", async () => {
        divResultat.innerHTML = "Calcul en cours...";

        // Création du worker 
        // let worker=new Worker("../services/webWorkerAddition.js");
        // worker.postMessage({a:+inputA.value,b:+inputB.value});

        // worker.addEventListener("message",(e)=>{
        //     let obj=e.data;
        //     if(obj.avancement!==undefined){
        //         divResultat.innerHTML=`Avancement : ${obj.avancement*100} %`;
        //     }
        //     if(obj.resultat){
        //         divResultat.innerHTML=`Résultat : ${obj.resultat}`;
        //     }
        // })
        // try {
        //     let resultat= await additionAsync(+inputA.value,+inputB.value);
        //     divResultat.innerHTML=`Le résultat est : ${resultat}`;            
        // } catch (error) {
        //     divResultat.innerHTML=`Le résultat est : ${error}`;  
        // }

        let resultatEventTarget = calculLongEvent(+inputA.value, +inputB.value);
        resultatEventTarget.addEventListener("resultat", (e) => {
            divResultat.innerHTML = `Le résultat est : ${(e as CustomEvent).detail.resultat}`;
        });
        resultatEventTarget.addEventListener("avancement", (e) => {
            divResultat.innerHTML = `On en est à  ${(e as CustomEvent).detail.avancement*100} %`;
        });


    });

})