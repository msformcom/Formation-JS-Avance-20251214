export function additionAsync(a:number,b:number): Promise<number>{
    return new Promise((resolve,reject)=>{
        // let r=0;
        // for(let i=0;i<a;i++){
        //     r++;
        // }
        // for(let i=0;i<b;i++){
        //     r++;
        // }

        let worker=new Worker("../services/webWorkerAddition.js");
        worker.postMessage({a,b});
        worker.addEventListener("message",(e)=>{
            if(e.data.erreur!=undefined){
                reject(new Error(e.data.erreur));
            }
            if(e.data.resultat!=undefined){
                resolve(e.data.resultat);
            }
        });

     
    });

}