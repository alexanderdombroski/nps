import { fetchParkData, fetchAlertData, fetchVisitorCenterData } from "./data/fetchData.mjs";
import { insertAlerts, insertFooter, insertParkHeader, insertActivites, insertVisitorCenters } from "./render.mjs";


(async function loadPage() {
    const parkData = await fetchParkData();
    const alertData = await fetchAlertData();
    const visitorCenterData = await fetchVisitorCenterData();

    insertParkHeader(parkData);
    insertAlerts(alertData);
    insertFooter(parkData);
    insertVisitorCenters(visitorCenterData);
    insertActivites(parkData.activities);
})();