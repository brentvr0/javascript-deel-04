const voegspatietoe = () => {
    let text1 =
        "dit is wat tekst om het uit te testen.";

    document.querySelector('.outputString').textContent
        = text1.replace("", " ");
}
window.addEventListener("load", setup);