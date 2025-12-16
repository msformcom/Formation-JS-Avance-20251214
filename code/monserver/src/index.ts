
// closure => créer une fonction pour créer un scope de variable
// et l'exécuter juste après
(function(){
        let a=1;

        let valeur=new Date();
        console.log(valeur);

})();




document.addEventListener("DOMContentLoaded",()=>{
        let locationHeure=document.querySelector("#location_heure");
        locationHeure!.innerHTML=new Date(2025,10,1).toDateString(); // 1 novembre 2025
});