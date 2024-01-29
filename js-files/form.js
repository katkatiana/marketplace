//IMPORT SECTION
import { token, url, jsonArray, fetchProducts } from "./utils.js";


//VARIABLES SECTION
const form = document.getElementById("my-form");
const button = document.querySelector("#get");


//FUNCTIONS SECTION
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);

  var object = {};

  data.forEach(function (value, key) {
    object[key] = value;
  });

  var json = JSON.stringify(object);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: json,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const resData = await res.json();
    console.log(resData);
  } catch (err) {
    console.log(err.message);
  }
});

button.addEventListener("click", async (event) => {
  try {
    const res = await fetchProducts(url, token);
  } catch (err) {
    console.log(err.message);
  }
});
