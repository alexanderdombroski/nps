import { getParkInfoLinks, getParkData } from "./data/parkService.mjs";
import { insertParkHeader, insertParkInfo, insertParkIntro, insertFooter } from "./render.mjs";
import { fetchParkData } from "./data/fetchData.mjs";

(async function loadInfo() {
    // Get Data
    let parkData = await fetchParkData("parks?parkCode=yell")
    if (parkData == {}){
        parkData = getParkData(); // Use old if fetch fails
    }
    const parkInfoLinks = getParkInfoLinks(parkData);

    // Manipulate HMTL
    insertParkHeader(parkData);
    insertParkIntro(parkData);
    insertParkInfo(parkInfoLinks);
    insertFooter(parkData);
})();

