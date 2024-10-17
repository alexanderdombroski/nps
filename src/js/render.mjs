import { mediaCardTemplate, heroTextTemplate, footerTemplate, alertTemplate, visitorCenterTemplate } from "./templates.mjs";

function insertParkHeader(parkData) {
    // Update Title
    document.querySelector("head title").textContent = parkData.name;
    
    // Update Disclaimer
    const realSiteLink = document.querySelector(".disclaimer > a");
    realSiteLink.href = parkData.url;
    realSiteLink.innerText = parkData.fullName;

    // Update Hero
    const hero = document.getElementById("hero-banner");
    const heroImage = hero.querySelector("img");
    heroImage.src = parkData.images[0].url;
    heroImage.alt = parkData.images[0].altText;
    const heroText = hero.querySelector(".hero-banner-text");
    heroText.innerHTML = heroTextTemplate(parkData);
}

function insertParkInfo(parkInfoLinks) {
    document.querySelector(".info-section").innerHTML = parkInfoLinks.map(mediaCardTemplate).join("");
}

function insertFooter(parkData) {
    document.getElementById("park-footer").innerHTML = footerTemplate(parkData)
}

function insertParkIntro(parkData) {
    const main = document.getElementById("main");
    main.querySelector(".intro-section h1").innerText = parkData.fullName;
    main.querySelector(".intro-section p").innerText = parkData.description; 
}

function insertAlerts(alertData) {
    const alerts = document.getElementById("alerts").querySelector('ul');
    alerts.innerHTML = alertData.map(alertTemplate, alertData).join('');
}

function insertVisitorCenters(visitorCenterData) {
    const visitorCenterSection = document.getElementById('visitorServices').querySelector('ul');
    visitorCenterSection.innerHTML = visitorCenterData.map(visitorCenterTemplate).join('');
}

function insertActivites(activites) {
    document.getElementById("activities").querySelector('ul').innerHTML = activites.map(activity => `<li>${activity.name}</li>`).join('');
}

export {
    insertParkHeader,
    insertFooter,
    insertParkIntro,
    insertParkInfo,
    insertAlerts,
    insertActivites,
    insertVisitorCenters
}