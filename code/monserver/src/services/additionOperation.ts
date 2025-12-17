export class AdditionOperation extends EventTarget{
    constructor(){
        super()
    }
    dispatchResultat(r:number){
        this.dispatchEvent(new CustomEvent<{resultat:number}>("resultat",{detail:{resultat:r}}));
    }

    dispatchAvancement(r:number){
        this.dispatchEvent(new CustomEvent<{avancement:number}>("avancement",{detail:{avancement:r}}));
    }


}