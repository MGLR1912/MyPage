document.addEventListener("DOMContentLoaded", function () {
    window.showLanguage = function (lang) {
        document.getElementById("en").classList.remove("active");
        document.getElementById("es").classList.remove("active");

        document.getElementById(lang).classList.add("active");
    };
});


