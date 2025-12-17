document.addEventListener("DOMContentLoaded",()=>{

    // Objet WebSocket : Etablissement d'une connection double sens avec le Hub coté server
    let socket=new WebSocket("ws://localhost:4201");
    socket.addEventListener("open",()=>{
        // Envoi d'un message au server
        socket.send(JSON.stringify({message:"Bonjour"}));

        socket.addEventListener("message",(e)=>{
            // e.data contient le message du server
            console.log(e.data);
        });
        socket.addEventListener("close",()=>{
            console.log("terminé");
        })
    });

});

