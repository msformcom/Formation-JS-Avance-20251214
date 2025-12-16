// Classe de chaine : String
// Ajouter une fonction au prototype des chaine
String.prototype.ellipsis=function(maxLength){
    if(this.length<=maxLength){
        // this : objet qui pointe vers la valeur String => boxing
        return this.toString();
    }
    return this.substring(0,maxLength-3)+"...";
}





let chaine="Le chat aime bien manger des souris";
let chaine2="Le rat rit"
let chaineRaccourcie=chaine.ellipsis(10); // "Le chat..."
let chaine2Raccourcie=chaine2.ellipsis(10); // "Le rat rit";





let tab=[1,2,3];
// pour enlever la valeur 2
// tab.splice(tab.indexOf(2),1)

tab.remove(2) // => [1,3]
 


class Voiture{
    modele="Peugeot"
}

let v=new Voiture();
let v2=v; // Copie de référence => adresse mémoire copiée

v.modele="Citroen"; // 

