import { insertParkHeader, insertFooter, insertVisitorCenterPageData } from "../render.mjs";
import { fetchParkData, fetchVisitorCenter } from "../data/fetchData.mjs";
import { globalMenuListenerSetup, globalSubMenuListenerSetup } from "../listeners.mjs";
import { getParam } from "../data/urlparam.mjs";


(async function loadInfo() {
    // Get Data
    const parkData = await fetchParkData();
    const id = getParam('id', "7E9FF3BE-48F0-48C0-9042-EEF0DF11371C")
    const centerDetails = await fetchVisitorCenter(id);
    
    // Manipulate HMTL
    insertVisitorCenterPageData(centerDetails);
    insertParkHeader(parkData);
    insertFooter(parkData);
})();

(function initListeners() {
    globalMenuListenerSetup();
    globalSubMenuListenerSetup();
})();
