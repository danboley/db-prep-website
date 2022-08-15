const h4 = document.createElement("h4");
h4.textContent = "Created by Daniel Boley for Flatiron School";
document.querySelector("body").appendChild(h4);

function popupButton () {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
