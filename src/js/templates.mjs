import spritePath from "../images/sprite.symbol.svg";

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
  const voice = info.contacts.phoneNumbers.find(
    (number) => number.type === "Voice",
  );

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
  const type =
    alert.category === "Park Closure"
      ? "closure"
      : alert.category.toLowerCase();

  return `
        <li class="alert">
            <h2>${alert.category}</h2>
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="${spritePath}#alert-${type}"></use>
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
            <h3>
                <a href="visitor-center.html?id=${visitorCenter.id}">${visitorCenter.name}</a>
            </h3>
            <p>${visitorCenter.description}</p>
            <p>${visitorCenter.directionsInfo}</p>
        </li>
    `;
}

// --------------- Visitor Center Templates ---------------

function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
            <img src="${image.url}" alt="${image.altText}" />
            <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
          </figure>
          <p>${data.description}</p>`;
}
function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

function vcAddressTemplate(data) {
  return `<section>
              <h3>${data.type} Address</h3>
              <address>
                ${data.line1}<br />
                ${data.city}, ${data.stateCode} ${data.postalCode}
              </address>
            </section>`;
}

function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}
function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}
function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
function vcContactsTemplate(data) {
  return `
    <section class="vc-contact__email">
      <h3>Email Address</h3>
      <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
    </section>
    <section class="vc-contact__phone">
      <h3>Phone numbers</h3>
      <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
    </section>
  `;
}

function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}
function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
    <use
      href="${spritePath}#${iconId}"
     ></use>
   </svg>
   `;
}
function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
    <summary>
    ${iconTemplate(iconId)}
    ${summaryText}
    </summary>
    ${content}
    </details>`;
}

export {
  heroTextTemplate,
  mediaCardTemplate,
  alertTemplate,
  footerTemplate,
  visitorCenterTemplate,

  // Visitor Center Page
  vcTitleTemplate,
  vcInfoTemplate,
  listTemplate,
  vcAddressTemplate,
  vcAddressesListTemplate,
  vcAmenityTemplate,
  vcDirectionsTemplate,
  vcContactsTemplate,
  vcImageTemplate,
  iconTemplate,
  vcDetailsTemplate,
};
