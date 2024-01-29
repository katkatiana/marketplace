//IMPORT SECTION
import { token, url, jsonArray, fetchProducts } from "./utils.js";

//VARIABLES SECTION
let everyId = [];


//FUNCTIONS SECTION
const showProducts = async function() {
    const tableBody = document.querySelector("#all-products");
    let i = 0;
    await fetchProducts(url, token);
    if(jsonArray.length > 0) {
        jsonArray.forEach(el => {
          everyId.push(el._id);
            tableBody.innerHTML += 
          `<tr index = ${i++}>
            <td>${el._id}</td>
            <td class = "editable">${el.brand}</td>
            <td class = "editable">${el.name}</td>
            <td class = "editable">${el.description}</td>
            <td class = "editable">${el.imageUrl}</td>
            <!--<td>${el.createdAt.split("T")[0]}</td>-->
            <td class = "editable">${el.price}</td>
            <td>
              <button class = "modify-button btn btn-warning">
                <i class="bi bi-pencil-square"></i>
              </button>
            </td>
            <td>
              <button id = "${el._id}" class = "delete-button btn btn-danger">
                <i class="bi bi-x-circle"></i>
              </button>
            </td>
          </tr>`
          
        });
    } else {
        alert("Error retrieving products, please refresh")
    }

    const modifyButtons = document.querySelectorAll(".modify-button");
    modifyButtons.forEach(modifyButton => {
      modifyButton.addEventListener("click", async (event) => {
        let tagTarget = event.target.tagName;
        let parent;
        let clickedButton;
        if(tagTarget === "I") {
          parent = event.target.parentNode.parentNode.parentNode;
        } else {
          parent = event.target.parentNode.parentNode;
        }
        /* to check if the button has been pressed once or twice we check if the child of the td element has any child with input tag. 
          if there is no child with input tag, it means that the button has been clicked for the first time and then we add the input text 
          as child of the TD so the user can modify the values. Otherwise, it means the button has already been clicked and we need to execute
          the put. */
        const editableChildren = parent.querySelectorAll(".editable"); 
        editableChildren.forEach(child => {
          let hasChildInput = child.querySelector(".editable-text");
          if(hasChildInput == null) {
            clickedButton = false;
            let childText = child.innerText;
            child.innerHTML = `<td class = "editable"><input class = "editable-text" type = "text" value = "${childText}"/></td>`
          } else {
            clickedButton = true;
          }
        })

        if(clickedButton) {
          //if clickedButton is true it means the button has already been clicked and it has to execute the put
          console.log("execute put")
          //retrieving the element id by getting the value of the first child of TR (parent)
          const elementId = parent.firstElementChild.innerText;
          const brandName = editableChildren[0].firstElementChild.value;
          const productName = editableChildren[1].firstElementChild.value;
          const productDescription = editableChildren[2].firstElementChild.value;
          const productImage = editableChildren[3].firstElementChild.value;
          const productPrice = editableChildren[4].firstElementChild.value;
          let putResponse
          try {
            putResponse = await fetch(url + elementId, {
              method: "PUT",
              body: JSON.stringify({
                imageUrl:productImage,
                name:productName,
                description:productDescription,
                brand: brandName,
                price:productPrice,
              }),
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            });
            console.log(putResponse)
            if(!putResponse.ok) {
              alert("Required modification did not work proprerly. Please, check console.")
            } 
            editableChildren.forEach(child => {
              //transform input text back to text area
              let childText = child.firstElementChild.value;
              child.innerHTML = `<td class = "editable">${childText}</td>`
          })
          } catch (err) {
            alert("The request was not processed correctly. Please, check console.")
            console.log(err.message);
          }  
        }
      });
    });
    

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", async (event) => {
        let productId = event.target.id;
        if(productId === "") {
          //in case the icon has been clicked instead of the button 
          const icon = event.target;
          const parentButton = icon.parentNode;
          productId = parentButton.id;
        }
        
        console.log("Clicked Delete Button. Product ID:", productId);
      
        try {
          const res = await fetch(url + productId, {
            method: "DELETE",
            headers: {
              Authorization: token,
            },
          });
          console.log(res)
          if (res.ok) {
            console.log(`Product with ID ${productId} deleted successfully`);
            event.target.closest("tr").remove();
          } else {
            alert("Required cancellation did not work proprerly. Please, check console.");
            console.log(`Failed to delete product with ID ${productId}`);
          }
        } catch (err) {
          alert("The request was not processed correctly. Please, check console.");
          console.log(err.message);
        }
      }); 
    }); 
}


//EXECUTION SECTION
showProducts()