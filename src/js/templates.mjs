function mediaCardTemplate(info) {
    return `
        <article>
            <a href="${info.link}">    
                <figure>
                    <img src="${info.image}" alt="${info.name} image"/>
                </figure>
            </a>
            <a href="${info.link}"><h2>${info.name}</h2></a>
            <p>${info.description}</p>
        </article>
    `;
}

function heroTextTemplate(parkInfo) {
    return `
        <a href="#">${parkInfo.name}</a>
        <p>
            <span>${parkInfo.designation}</span>
            <span>${parkInfo.states}</span>
        </p> 
    `;
}

function footerTemplate(info) {
    const mailing = info.addresses.find((address) => address.type === "Mailing");
    const voice = info.contacts.phoneNumbers.find((number) => number.type === "Voice");
    
    return `
        <section class="contact">
            <h3>Contact Info</h3>
            <h4>Mailing Address:</h4>
            <div><p>${mailing.line1}<p>
            <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
            <h4>Phone:</h4>
            <p>${voice.phoneNumber}</p>
        </section>
    `;
}

function alertTemplate(alert) {
    const type = alert.category === "Park Closure" ? "closure" : alert.category.toLowerCase();
    
    return `
        <li class="alert">
            <h2>${alert.category}</h2>
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="${import.meta.env.BASE_URL}images/sprite.symbol.svg#alert-${type}"></use>
            </svg>
            <div>
                <h3 class="alert-${type}">${alert.title}</h3>
                <p>${alert.description}</p>
                <a href="${alert.url}">More \></a>
            </div>
        </li>
    `;
}

function visitorCenterTemplate(visitorCenter) {
    return `
        <li>
            <h3>${visitorCenter.name}</h3>
            <p>${visitorCenter.description}</p>
            <p>${visitorCenter.directionsInfo}</p>
        </li>
    `;
}



export {
    heroTextTemplate,
    mediaCardTemplate,
    alertTemplate,
    footerTemplate,
    visitorCenterTemplate
}