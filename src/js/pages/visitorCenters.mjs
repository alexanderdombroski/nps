import { insertParkHeader, insertFooter } from "../render.mjs";
import { fetchParkData } from "../data/fetchData.mjs";
import { globalMenuListenerSetup, globalSubMenuListenerSetup } from "../listeners.mjs";


(async function loadInfo() {
    // Get Data
    const parkData = await fetchParkData();

    // Manipulate HMTL
    insertParkHeader(parkData);
    insertFooter(parkData);
})();

(function initListeners() {
    globalMenuListenerSetup();
    globalSubMenuListenerSetup();
})();
