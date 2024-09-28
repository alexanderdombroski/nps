
export function mediaCardTemplate(info) {
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

export function heroTextTemplate(parkInfo) {
    return `
        <a href="#">${parkInfo.name}</a>
        <p>
            <span>${parkInfo.designation}</span>
            <span>${parkInfo.states}</span>
        </p> 
    `;
}

export function footerTemplate(info) {
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

