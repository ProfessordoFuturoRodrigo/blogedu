function ativarDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkmode", document.body.classList.contains("dark"));
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkmode") === "true") {
        document.body.classList.add("dark");
    }
});
