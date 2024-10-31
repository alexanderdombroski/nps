

const globalMenuListenerSetup = () => document.getElementById("global-nav-toggle").addEventListener('click', (event) => {
    // Toggle Global Navigation
    event.currentTarget.setAttribute("aria-expanded", event.currentTarget.getAttribute("aria-expanded") === "false");
    document.querySelector('.global-nav').classList.toggle("show");
});



export { globalMenuListenerSetup }