import { CoursWatcher } from "../services/CoursWatcher";

document.addEventListener("DOMContentLoaded",()=>{
    let surveillance=new CoursWatcher(3000); 
    // 3000 => intervale souhaité pour le rafraichissement
    // toutes les 3 s => fetch("./coursEuroDollar")
    // => resultat => declenchement d'event newcours
    // let reponse=await fetch("./coursEuroDollar")
    // let dto=await r.json();

    
    surveillance.addEventListener("change",(e)=>{
        document.getElementById("div_cours")!.innerHTML=(e as CustomEvent).detail.coursEuroDollar;
    })
    surveillance.addEventListener("error",(e)=>{
        document.getElementById("div_cours")!.innerHTML=(e as CustomEvent).detail.message;
    })
})