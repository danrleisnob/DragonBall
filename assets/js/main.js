const theme = document.getElementById("theme");
const image = document.g

const rootHtml = document.documentElement;

function changetheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === 'dark') rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

    theme.classList.toggle("bi-cloud-sun");
    theme.classList.toggle("bi-cloud-moon");
}

theme.addEventListener("click", changetheme);

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(intem => {
    intem.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        intem.classList.add("active");
    })
})
