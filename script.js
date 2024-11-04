
let totalUsers = document.getElementById('totalUsers').textContent;
let totalSales = document.getElementById('totalSales').textContent;

let alertButton = document.getElementById('alertButton');

alertButton.addEventListener("click", function() {
    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});