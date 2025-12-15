document.addEventListener("DOMContentLoaded", function () {

    function addition() {
        let sum = 0;
        // Arguments : pseudoTableau => index + length => prototype Object
        for (let i = 0; i < arguments.length; i++) {
            let n = parseFloat(arguments[i]); // NaN
            if (isNaN(n)) {
                throw new Error("Un des arguments n'est pas un nombre")
            }
            sum += n;
        }





        return sum;
    }

    // Spread => étalement de tableau
    function additionRecente(...d) {
        // On reçoit d sous forme de tableau => Prototype Array
        return d.reduce((a, b) => {
            return a + b;
        }, 0);
    }

    class TestFunctions {
        /**
         *
         */
        constructor() {
            let self = this;
            setTimeout(() => {
                // this de la fonction fléchéé = this du morceau de code dans lequel elle est définie
                console.log(this.a);
            }, 1);
            setTimeout(function () {
                // this dépend de quel objet exécute la fonction
                console.log(self.a);
            }, 1);


        }
        a = 1;
    }

    class Voiture {
        marque = "Peugeot";
        prix = 1000;
        /**
         *
         */



        mettreAuRabaisFlechee = (r) => {
            this.prix = this.prix * (1 - r);
        }


        mettreAuRabais(r) {
            this.prix = this.prix * (1 - r);
        }
    }

    let v = new Voiture();
    v.mettreAuRabais(0.1);

    let camion = {
        marque: "Volvo",
        prix: 100000
    };


    // Fonction normale => this non configurable 
    v.mettreAuRabaisFlechee.call(camion, 0.1);

    // Fonction normale => this configurable

    // Appel d'une fonction avec this +arg
    v.mettreAuRabais.call(camion, 0.1);



    // Création d'une fonction avec context this + args
    let reduc10percent = v.mettreAuRabais.bind(camion, 0.1);
    reduc10percent();

    reduc10percent.call({ prix: 100 }); // Reduc de 0.1 sur objet


    v.mettreAuRabais.apply(camion, [0.1]);




    let t = new TestFunctions();

    let n = document.getElementById("input_3").value;

    let r = additionRecente(1, 2, 3, 4);

    console.log(r);





});