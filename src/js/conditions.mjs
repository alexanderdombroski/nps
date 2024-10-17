import { fetchParkData, fetchAlertData } from "./data/fetchData.mjs";
import { insertAlerts, insertFooter, insertParkHeader, insertActivites } from "./render.mjs";


(async function loadPage() {
    const parkData = await fetchParkData();
    const alertData = await fetchAlertData();

    insertParkHeader(parkData);
    insertAlerts(alertData);
    insertFooter(parkData);
    insertActivites(parkData.activities);
})();