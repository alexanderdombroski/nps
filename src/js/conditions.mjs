import { fetchParkData } from "./data/fetchData.mjs";
import { insertFooter, insertParkHeader } from "./render.mjs";


(async function loadPage() {
    const parkData = await fetchParkData("parks?parkCode=yell");
    
    insertParkHeader(parkData);
    insertFooter(parkData);
})();