//IMPORT SECTION
import { token, url, jsonArray, fetchProducts } from "./utils.js";


//FUNCTIONS SECTION
const showProducts = async function() {
    const tableBody = document.querySelector(".card-products");
    await fetchProducts(url, token);
    if(jsonArray.length > 0) {
        jsonArray.forEach(el => {
            tableBody.innerHTML += `<div class="card" style="width: 16rem;">
            <img src="${el.imageUrl}" class="card-img-top" alt="product photo">
            <div class="card-body">
              <h6 class="card-title"><a href = "./details.html?id=${el._id}">${el.name}</a></h6>
              <!--<p class="card-text">${el.description}</p>-->
              <p>${el.price}, 00 $</p>
              <a href="#" class="btn btn-primary">Add to basket</a>
            </div>
          </div>`
          console.log(el)
        });
    } else {
        alert("Error retrieving products, please refresh")
    }
}


//EXECUTION SECTION
showProducts()

