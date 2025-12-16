let d=1;
console.log(!!d)


 if(d){
      //c ne vaut pas false, "",undefined, null,NaN,0 => falsy
      //truthy => pas falsy
 }

// Tester le type de d
if(typeof(d)==='number'){
    // number, string
}



 class Chien{
     race;
 }

 class Chiwawa extends Chien{
    constructor(){
        super();
        this.race="Chiwawa";
    }
 }

 let c=new Chiwawa();
 // c en tant que variable => non typé => on peut metre ce qu'on veut dedans
 // la valeur de c est typé

 // test de la class de c
 if(c instanceof Chien){
    console.log("Un chiwawa est un chien");
 }

if(c instanceof Chiwawa){
    console.log("Un chiwawa est un chiwawa");
 }

 if(c.constructor!=Chien){
    console.log("c n'est pas construit avec Chien");
 }
 c=new Chien();
 if(c.constructor==Chien){
    console.log("c est construit avec Chien");
 }
