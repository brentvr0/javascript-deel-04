const setup = () => {
var profile_values = document.getElementsByClassName('profile-value');
    var total = 0;
    for(var i = 0; i < profile_values.length; i += 1){
        total += profile_values[i].innerHTML.trim().split("an").length
    }
    alert("An komt " + total + " voor.");
}
window.addEventListener("load", setup);