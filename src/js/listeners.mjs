

const globalMenuListenerSetup = () => document.getElementById("global-nav-toggle").addEventListener('click', (event) => {
    // Toggle Global Navigation
    event.currentTarget.setAttribute("aria-expanded", event.currentTarget.getAttribute("aria-expanded") === "false");
    document.querySelector('.global-nav').classList.toggle("show");
});

const globalSubMenuListenerSetup = () => document.querySelectorAll(".global-nav__split-button__toggle").forEach(nav => {
    nav.addEventListener("click", (event) => {
        const sub = event.currentTarget.closest("li").querySelector(".global-nav__submenu")
            sub.classList.toggle("show");
        console.log(sub)
        console.log("clicked");
        event.currentTarget.querySelector(".icon").classList.toggle("rotate");
    })
});

export { globalMenuListenerSetup, globalSubMenuListenerSetup }
