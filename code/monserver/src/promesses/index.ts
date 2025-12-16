import { getPositionAsync } from "./getPosition.js";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        let coords = await getPositionAsync();

        let selection = document.querySelectorAll("[data-inject]");


        for (let e of selection) {

            let valeurDataInject = e.getAttribute("data-inject")!;
            e.innerHTML = (coords as any)[valeurDataInject];
        }
    } catch (error : any) {
        console.log(error.message)
    }
});




