function calculateCost() {
    var avgConsumption = document.getElementById("avg-consumption").value;
    var distance = document.getElementById("distance").value;
    var gasPrice = document.getElementById("gas-price").value;

    var totalCost = (distance / 100) * avgConsumption * gasPrice;
    document.getElementById("total-cost").innerHTML = totalCost.toFixed(2) + " €";
}
const flagIcon = document.getElementById("flag-icon");

// flagIcon.addEventListener("click", function () {
//     // Translate the page to Albanian
//     document.body.innerHTML = translateToAlbanian(document.body.innerHTML);
// });

