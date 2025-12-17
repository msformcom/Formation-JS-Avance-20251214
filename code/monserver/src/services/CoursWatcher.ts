import { CoursDto } from "../dto/cours-dto";

export class CoursWatcher extends EventTarget{
    constructor(interval:number=1000){
        super();
        this.interval=interval;
        this.start();


    }
    lastCours:string="";
    handleInterval:any=undefined;
    stop(){
        if(this.handleInterval){
            clearInterval(this.handleInterval);
            this.handleInterval=undefined;
        }
       
    }
    start(){
        if(this.handleInterval==undefined){
            this.handleInterval=setInterval(async ()=>{
                try {
                    const r=await fetch("/coursEuroDollar",{signal: AbortSignal.timeout(this.interval*0.8) });
                    const dto=await r.json() as CoursDto;
                    if(this.lastCours!=JSON.stringify(dto)){
                        // Amélioration : l'évènement n'est déclenché que si l'objet reçu est différent de l'ancien
                        this.dispatchEvent(new CustomEvent<CoursDto>("change",{detail:dto}));  
                        this.lastCours=JSON.stringify(dto)
                    }
                                 
                } catch (error) {
                    this.dispatchEvent(new CustomEvent<Error>("error",{detail:new Error("Cours non disponible")}));
                }

            },this.interval);            
        }

    }


    //#region Propriété intervalle
    private _interval!:number;
    public get interval(): number {
        return this._interval;
    }
    public set interval(value: number) {
        if(value<=0){
            throw new Error("Interval non valide")
        }
        this._interval = value;
    }
    //#endregion





}