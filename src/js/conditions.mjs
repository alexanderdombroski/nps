import { fetchParkData, fetchAlertData, fetchVisitorCenterData } from "./data/fetchData.mjs";
import { insertAlerts, insertFooter, insertParkHeader, insertActivites, insertVisitorCenters } from "./render.mjs";
import { globalMenuListenerSetup } from "./listeners.mjs";

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

(function initListeners() {
    globalMenuListenerSetup();
})();

// autoCloseToggles
document.getElementById("main").querySelectorAll("details").forEach(dropdown => {
    dropdown.addEventListener('toggle', function (event) {
        if (event.target.open === false) return; 
        document.getElementById("main").querySelectorAll("details").forEach(other => other.open = other === dropdown);
        dropdown.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});


