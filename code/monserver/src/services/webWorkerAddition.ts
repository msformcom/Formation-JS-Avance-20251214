// Ce code est le code d'un web worker
// Il est parrallélisé par rapport au main javascript
// il communique avec le main javascript avec un systeme de messageire
// attention : les objets échangés avec le code appelant sont serialisé 
// ici, impossible d'accéder au document
self.addEventListener("message", (e) => {
    try {
        const { a, b } = e.data;
        let r = 0;
        postMessage({avancement: 0});
        for (let i = 0; i < a; i++) {
            r++;
        }
        postMessage({avancement: a/(a+b)});
        for (let i = 0; i < b; i++) {
            r++;
        }
        // retour d'un objet au code appelant
        postMessage({resultat:r});        
    } catch (error) {
        postMessage({erreur:"Erreur"});
    }



})