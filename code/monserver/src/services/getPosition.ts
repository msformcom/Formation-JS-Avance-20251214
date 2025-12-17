export  function getPositionAsync() : Promise<GeolocationCoordinates>{
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
            position=>{
                setTimeout(()=>{
                    //reject(new Error("Problème"));
                     resolve(position.coords);
                },5000)
               
            },
            err=> reject(new Error("Problème")),
            {enableHighAccuracy:true,timeout:5000,maximumAge:0}
        );
        console.log("On sort de la fonction")
    });
}