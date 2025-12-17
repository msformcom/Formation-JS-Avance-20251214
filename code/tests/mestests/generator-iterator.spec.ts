describe("Generator-Iterator",()=>{
    it("Tableaux",()=>{
        let tab=[];

        for(let i=0;i<1000;i++){
            tab.push(i);
        }
        // tab : 0,1,    ,999

        let entiersPairs=tab.filter(c=>c%2==0); // 0,2,   , 998 => 500 elements
        let doubleDesEntiersPairs=entiersPairs.map(c=>c*2); // 0,4,     ,1996 => 500
        console.log(doubleDesEntiersPairs);
    })


})