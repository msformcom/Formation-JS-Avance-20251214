document.addEventListener("DOMContentLoaded",()=>{
    let surveillance=surveillerCours(3000); 
    // 3000 => intervale souhaité pour le rafraichissement
    // toutes les 3 s => fetch("./coursEuroDollar")
    // => resultat => declenchement d'event newcours
    // let reponse=await fetch("./coursEuroDollar")
    // let dto=await r.json();

    
    surveillance.addEventListener("newcours",(e)=>{
        document.getElementById("div_cours")?.innerHTML=e.detail.cours;
    })
    surveillance.addEventListener("error",(e)=>{
        document.getElementById("div_cours")?.innerHTML="Erreur de chargement du cours";
    })
})