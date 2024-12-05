import { 
    mediaCardTemplate, heroTextTemplate, footerTemplate, alertTemplate, visitorCenterTemplate,
    vcTitleTemplate, vcInfoTemplate, listTemplate, vcAddressTemplate, vcAddressesListTemplate, vcAmenityTemplate, 
    vcDirectionsTemplate, vcContactsTemplate, vcImageTemplate, iconTemplate, vcDetailsTemplate
} from "./templates.mjs";

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

function insertVisitorCenterPageData(centerData) {
    document.querySelector(".vc-name").innerHTML = vcTitleTemplate(centerData.name);
    document.querySelector(".vc-info").innerHTML = vcInfoTemplate(centerData);
    const detailsEl = document.querySelector(".vc-details-list");
    detailsEl.innerHTML = "";
    detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("vcAddresses", "Addresses", "heading-icon_map-pin", vcAddressesListTemplate(centerData.addresses)));
    detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("vcDirections", "Directions", "directions", vcDirectionsTemplate(centerData.directionsInfo)));
    detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("vcAmenities", "Amenities", "heading-icon_info", listTemplate(centerData.amenities, vcAmenityTemplate)));
    detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("vcContacts", "Contacts", "phone", vcContactsTemplate(centerData.contacts)));
    document.querySelector(".vc-gallery").insertAdjacentHTML("beforeend", listTemplate(centerData.images, vcImageTemplate));
}

export {
    insertParkHeader,
    insertFooter,
    insertParkIntro,
    insertParkInfo,
    insertAlerts,
    insertActivites,
    insertVisitorCenters,
    insertVisitorCenterPageData
}