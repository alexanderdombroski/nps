import { getParkInfoLinks, getParkData } from "./data/parkService.mjs";
import { insertParkHeader, insertParkInfo, insertParkIntro, insertFooter } from "./render.mjs";

(function loadInfo() {
    // Get Data
    const parkData = getParkData();
    const parkInfoLinks = getParkInfoLinks();

    // Manipulate HMTL
    insertParkHeader(parkData);
    insertParkIntro(parkData);
    insertParkInfo(parkInfoLinks);
    insertFooter(parkData);

})();





