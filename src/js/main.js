import { getParkData } from "./parkService.mjs";

// Get Park Data
const parkData = getParkData();

(function insertParkData() {
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
})();


function heroTextTemplate(parkInfo) {
    return (
    `<a href="#">${parkInfo.name}</a>
    <p>
        <span>${parkInfo.designation}</span>
        <span>${parkInfo.states}</span>
    </p>`
    );
}

