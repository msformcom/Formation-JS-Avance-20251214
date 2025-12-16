let tab=new Array();
let tab1=[1,2,3];
let tab2=[4,5,6];

// Concatener des tableaux
let tabUnion=tab1.concat(tab2);

Array.prototype.copyWithin=function(a){
    console.log(a);
}

// Créer un tableau à partir de tableaux existants
tabUnion=[7,...tab2,...tab1];

tabUnion.filter(function(a){
    return a<5;
})

tabUnion.filter(a=>{
    return a<5;
})


// Destructuring
let [a,b,c]=tab1;

// inverser 2 variable
let min=4;
let max=2;

if(min>max){
    [min,max]=[max,min]
}

console.log(min,max);