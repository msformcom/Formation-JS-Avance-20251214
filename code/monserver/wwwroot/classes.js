
// Syntaxe classique de création de classe
class Compteur {
    /**
     *
     */
    constructor(valeurInitiale) {
        this.valeur = valeurInitiale;
        document.addEventListener("click", function () {
            console.log(this.valeur);
        })

    }
    valeur = 0;
    increment(){
        this.valeur++;
    }
}

// Syntaxe JS vintage
function Compteur2(valeurInitiale) {
    this.valeur = valeurInitiale;
    document.addEventListener("click", function () {
        console.log(this.valeur);
    });

    this.increment=function(){
        this.valeur++;
    }
}

let c=new Compteur(1);
let c2 = new Compteur2(1);

// le système
// 1) créé un objet => constructor => Compteur2
let constructorDec2=c2.constructor;  // => Compteur

// Créer un objet du même type que c2
let c3=new constructorDec2(2);  

// Compteur2.prototype
constructorDec2.prototype.decrement=function(){
    this.valeur--;
}




// Ca marche
c2.decrement(); 
// Recherche une fonction decrement sur l'instance => non
// Recherche une fonction decrement sur le prototype du constructeur de c2 => Oui => Execution

c2.decrement=function(){
    this.valeur-=2;
}

c2.decrement(); 
// Recherche une fonction decrement sur l'instance => oui

c3.decrement(); 
// Recherche une fonction decrement sur l'instance => non
// Recherche une fonction decrement sur le prototype du constructeur de c2 => Oui => Execution

c2.decrement.call(c3);