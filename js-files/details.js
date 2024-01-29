//IMPORT SECTION
import { token } from "./token.js";
import { url, jsonArray, fetchProducts } from  "./utils.js";


//FUNCTIONS SECTION
const showProductDetails = function(inputProduct) {
    const detailPage = document.querySelector(".detailed");
    detailPage.innerHTML += `<h3>${inputProduct.name}</h3>
    <img src="${inputProduct.imageUrl}" style = "width : 20%" class="card-img-top" alt="selected-product">
    <p>${inputProduct.price} $</p>
    <p>${inputProduct.description}</p>`
}

const fetchDetails = async function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
        await fetchProducts(url + id, token);
        showProductDetails(jsonArray);
}

//EXECUTION SECTION
fetchDetails() 

