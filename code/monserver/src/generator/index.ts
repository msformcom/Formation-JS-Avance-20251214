        let tab=[];

        for(let i=0;i<1000;i++){
            tab.push(i);
        }
        // tab : 0,1,    ,999

        // Un objet qui est limité aux 500 premiers entiers
        let doubleDesEntiersPairs=tab.filter(c=>c%2==0).map(c=>c*2); // 0,4,     ,1996 => 500
        for(let e of doubleDesEntiersPairs){
            console.log(e);
            if(e<10000){
                break;
            }
        }

        // J'aimerais un objet contenant tous les entiers
        // Générator
        function* tousLesEntiers(){
            let i=0;
            while(true){
                yield i;
                i++;
            }
        }

        // iterator
        for(let e of tousLesEntiers()){
            console.log(e);
            if(e==1000){
                console.log(e);
                break;
            }
        }



        async function* coursEuroDollar():AsyncGenerator<{coursEuroDollar:number}, void, unknown>{
            let i=1;
            while(true){
                // je vais chercher si demandé le prochain cours eurodolaar
                 const r=await fetch("/coursEuroDollar?"+i,{signal: AbortSignal.timeout(500) });
                const dto=await r.json();
                yield dto;
                i++;
            }
        }
        document.addEventListener("DOMContentLoaded",()=>{
            let generator=coursEuroDollar();
            document.querySelector("#next")?.addEventListener("click",async ()=>{
                let nouveauCours=await generator.next();
                if(!nouveauCours.done){
                    let li=document.createElement("li");
                    li.innerHTML=nouveauCours.value.coursEuroDollar.toFixed(0)
                    document.querySelector("#liste")!.appendChild(li);
                }
            })
        });

        // (async function(){
        //     for await(let e of coursEuroDollar()){
        //         await new Promise((resolve)=>setTimeout(resolve,1000));
        //         console.log(e);
        //     }

        // })();