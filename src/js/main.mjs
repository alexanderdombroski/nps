import { getParkInfoLinks, getParkData } from "./data/parkService.mjs";
import { insertParkHeader, insertParkInfo, insertParkIntro, insertFooter } from "./render.mjs";
import { fetchParkData } from "./data/fetchData.mjs";

(async function loadInfo() {
    // Get Data
    const parkData = await fetchParkData()
    const parkInfoLinks = getParkInfoLinks(parkData);

    // Manipulate HMTL
    insertParkHeader(parkData);
    insertParkIntro(parkData);
    insertParkInfo(parkInfoLinks);
    insertFooter(parkData);
})();

