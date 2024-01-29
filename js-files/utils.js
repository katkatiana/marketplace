export let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDU5OTIwNzgsImV4cCI6MTcwNzIwMTY3OH0.g96ni3wzRQfJWp48pMhH2ekNatYJzxW1i7EjF2hkMbU";
export const url = "https://striveschool-api.herokuapp.com/api/product/";
export let jsonArray = [];

export const fetchProducts = async function(inputUrl, inputToken) {

  try {
    const res = await fetch(inputUrl, {
      headers: {
        "Authorization": inputToken,
        "Content-Type": "application/json",
      },
    });
    jsonArray = await res.json();
    console.log(jsonArray);
  } catch (err) {
    console.log("error", err);
  }
  return jsonArray
}