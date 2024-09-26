import { mediaCardTemplate, heroTextTemplate, footerTemplate } from "./templates.mjs";

export function insertParkHeader(parkData) {
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

export function insertParkInfo(parkInfoLinks) {
    document.querySelector(".info-section").innerHTML = parkInfoLinks.map(mediaCardTemplate).join("");
}

export function insertFooter(parkData) {
    document.getElementById("park-footer").innerHTML = footerTemplate(parkData)
}

export function insertParkIntro(parkData) {
    const main = document.getElementById("main");
    main.querySelector(".intro-section h1").innerText = parkData.fullName;
    main.querySelector(".intro-section p").innerText = parkData.description; 
}