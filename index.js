const LANGUAGES = [ "pt-br", "eng" ];
main();
loadSections();

function main() {
    let lang = window.location.search.substr(1);
    lang = lang.split("=")[1];

    if (lang == "eng") applyLanguage("eng");
    else applyLanguage("pt-br");
}

function applyLanguage(targetLang) {
    LANGUAGES.forEach(lang => {
        if (lang == targetLang) return;

        let elements = document.querySelectorAll(`.${lang}`);
        elements.forEach(element => {
            element.classList.add("visually-hidden");
        });
    });
}


async function loadSections() {
    const response = await fetch("sections-pt.json");
    const json = await response.json();
    console.log(json);
}