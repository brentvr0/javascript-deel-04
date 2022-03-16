const verwijderspaties = () => {
    let text1 =
        "dit is wat tekst om het uit te testen.";

    document.querySelector('.outputString').textContent
        = text1.replace(/ /g, "");
}
window.addEventListener("load", setup);