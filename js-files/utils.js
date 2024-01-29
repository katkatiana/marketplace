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