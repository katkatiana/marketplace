const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDU5OTIwNzgsImV4cCI6MTcwNzIwMTY3OH0.g96ni3wzRQfJWp48pMhH2ekNatYJzxW1i7EjF2hkMbU";
let jsonProducts = [];

const fetchProducts = async function(inputUrl, inputToken) {
  try {
    const res = await fetch(inputUrl, {
      headers: {
        "Authorization": inputToken,
        "Content-Type": "application/json",
      },
    });
    jsonProducts = await res.json();
    console.log(jsonProducts);
  } catch (err) {
    console.log("error", err);
  }
}

const showProducts = async function() {
    const tableBody = document.querySelector("#all-products");
    await fetchProducts(url, token);
    if(jsonProducts.length > 0) {
        jsonProducts.forEach(el => {
            tableBody.innerHTML += `<tr>
            <td>${el._id}</td>
            <td>${el.brand}</td>
            <td>${el.name}</td>
            <td>${el.createdAt.split("T")[0]}</td>
            <td>${el.price}</td>
          </tr>`
        });
    } else {
        alert("Error retrieving products, please refresh")
    }
}

showProducts()