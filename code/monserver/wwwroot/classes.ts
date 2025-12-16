
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

class Voiture{
    constructor(modele:string){
        this.modele=modele;
    }
     marque="Peugeot";
     prix=100000000; // Valeur par défaut => toujours acceptable
     couleur?:  "vert" |"bleu" | null; // valeur non définie acceptable
     //modele: string; // valeur obligatoire sans valeur par défaut

     private _modele!:string; // ! : je désactive la vérification de l'initialisation du champs (stocker l'information)
    get modele(){
        return this._modele;
    }
    set modele(v:string){
        if(!v || typeof v !== "string"){
            throw new Error("Le modèle doit être une chaine non vide");
        }
        this._modele=v;
    }


 }
let v=new Voiture("208");
Object.assign(v,{modele:4});

let m=v.modele; // Lecture de modele => exécution du getter (get)
v.modele="208"; // Ecriture du modele => execution du setter (set) avec comme paramètre la valeur assigné

//.....
//v["modele"]=undefined;
//(v as any).modele=undefined;
//Object.assign(v,{modele:undefined,prix:1000}) // passe les propriétés de source (param2) vers la target (v)  

let o1={a:1,b:2};
let o2={b:1,c:2};
let o3={...o1,...o2}; // {a:1,b:1,c:2}
console.log(o3);

// clone un object
console.log(v.constructor); // Voiture

let v2=new (v.constructor as any)();
console.log(v2); // Voiture vide (sans les valeurs assignées par le constructeur)
Object.assign(v2,v);
console.log(v2);




