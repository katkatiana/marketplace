/* const products = [
    {
      name: "iPhone 14 Pro",
      description: "Il nuovo iPhone 14 Pro, con un design rinnovato e un processore più potente.",
      brand: "Apple",
      imageurl: "https://www.apple.com/it/iphone-14-pro/",
      price: 1.199
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      description: "Il nuovo Samsung Galaxy S23 Ultra, con una fotocamera da 200 megapixel e una batteria da 5.000 mAh.",
      brand: "Samsung",
      imageurl: "https://www.samsung.com/it/smartphones/galaxy-s23-ultra/",
      price: 1.299
    },
    {
      name: "MacBook Air M2",
      description: "Il nuovo MacBook Air M2, con un design rinnovato e un chip M2 più potente.",
      brand: "Apple",
      imageurl: "https://www.apple.com/it/macbook-air/",
      price: 1.199
    },
    {
      name: "Dell XPS 13 Plus",
      description: "Il nuovo Dell XPS 13 Plus, con un design rinnovato e un display OLED.",
      brand: "Dell",
      imageurl: "https://www.dell.com/it-it/work/shop/dell-xps-13-plus-laptop/spd/xps-13-plus-9320-laptop/nxpd5c13p13s",
      price: 1.999
    },
    {
      name: "Asus ROG Zephyrus G15",
      description: "Il nuovo Asus ROG Zephyrus G15, con un processore AMD Ryzen 9 690o0HS e una scheda grafica NVIDIA GeForce RTX 3080 Ti.",
      brand: "Asus",
      imageurl: "https://www.asus.com/it/Laptops/Gaming/ROG-Zephyrus/ROG-Zephyrus-G15-G513QM/",
      price: 3.499
    },
    {
      name: "Sony PlayStation 5",
      description: "La nuova console di gioco di Sony, con un processore AMD Ryzen Zen 2 e una GPU AMD RDNA 2.",
      brand: "Sony",
      imageurl: "https://www.playstation.com/en-us/ps5/",
      price: 499
    },
    {
      name: "Xbox Series X",
      description: "La nuova console di gioco di Microsoft, con un processore AMD Zen 2 e una GPU AMD RDNA 2.",
      brand: "Microsoft",
      imageurl: "https://www.xbox.com/it-it/consoles/xbox-series-x",
      price: 499
    },
    {
      name: "Acer Nitro 5",
      description: "Un laptop da gioco economico con un processore AMD Ryzen 5 660o0H e una scheda grafica NVIDIA GeForce RTX 3050.",
      brand: "Acer",
      imageurl: "https://www.acer.com/it-it/laptops/nitro-5/AN515-57-54T2/",
      price: 999
    },
    {
      name: "Lenovo IdeaPad 3",
      description: "Un laptop economico per uso quotidiano con un processore Intel Core i5-1240P e 8 GB di RAM.",
      brand: "Lenovo",
      imageurl: "https://www.lenovo.com/it-it/laptops/ideapad/ideapad-3/p/88IPS90o0799",
      price: 599
    },
    {
      name: "Samsung Galaxy Watch4 Classic",
      description: "Un orologio intelligente premium con un design elegante e un'ampia gamma di funzionalità.",
      brand: "Samsung",
      imageurl: "https://www.samsung.com/it/wearables/smartwatches/galaxy-watch4-classic/",
      price: 349
    },
    {
      name: "Apple Watch Series 7",
      description: "Un orologio intelligente premium con un design rinnovato e un'ampia gamma di funzionalità.",
      brand: "Apple",
      imageurl: "https://www.apple.com/it/watch/series-7/",
      price: 399
    },
    {
      name: "Sony WH-10o00XM5",
      description: "Un paio di cuffie over-ear con cancellazione del rumore di alta qualità.",
      brand: "Sony",
      imageurl: "https://www.sony.it/electronics/headband-headphones/wh-10o00xm5/p",
      price: 399
    },
    {
      name: "Bose QuietComfort 45",
      description: "Un paio di cuffie over-ear con cancellazione del rumore di alta qualità.",
      brand: "Bose",
      imageurl: "https://www.bose.it/en_us/products/headphones/quietcomfort-45.html",
      price: 349,
    },
    {
      name: "Apple AirPods Pro",
      description: "Un paio di cuffie true wireless con cancellazione del rumore.",
      brand: "Apple",
      imageurl: "https://www.apple.com/it/airpods-pro/",
      price: 279
    },

    {
      name: "Samsung Galaxy S23",
      description: "Il nuovo smartphone di punta di Samsung, con un display da 6,1 pollici e una fotocamera da 50 megapixel.",
      brand: "Samsung",
      imageurl: "https://www.samsung.com/it/smartphones/galaxy-s23/",
      price: 899
    },
    {
      name: "Apple iPhone 14",
      description: "Il nuovo smartphone di punta di Apple, con un display da 6,1 pollici e una fotocamera da 48 megapixel.",
      brand: "Apple",
      imageurl: "https://www.apple.com/it/iphone-14/",
      price: 999
    },
    {
      name: "Asus ROG Zephyrus G14",
      description: "Un laptop da gioco portatile con un processore AMD Ryzen 7 6800HS e una scheda grafica NVIDIA GeForce RTX 3060.",
      brand: "Asus",
      imageurl: "https://www.asus.com/Laptops/ROG-Zephyrus-G14/",
      price: 1.499
    },
    {
      name: "Dell XPS 13",
      description: "Un laptop ultraportatile con un processore Intel Core i7-12700H e un display OLED.",
      brand: "Dell",
      imageurl: "https://www.dell.com/it-it/work/shop/dell-xps-13-laptop/spd/xps-13-9330-laptop-platinum-with-black-carbon-fiber-keyboard-n0055245",
      price: 1.999
    },
    {
      name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
      description: "Un mouse da gioco wireless con un sensore HERO 25K e 256 livelli di DPI.",
      brand: "Logitech",
      imageurl: "https://www.logitech.com/it-it/products/gaming-mice/g502-lightspeed-wireless-gaming-mouse.html",
      price: 149
    },
    {
      name: "Razer BlackWidow V3 Pro Wireless Gaming Keyboard",
      description: "Una tastiera da gioco wireless con interruttori Razer Green e retroilluminazione RGB.",
      brand: "Razer",
      imageurl: "https://www.razer.com/it-it/gaming-keyboards/blackwidow-v3-pro-wireless-gaming-keyboard",
      price: 249
    },
    {
      name: "Acer Predator XB323ULP",
      description: "Un monitor da gioco da 32 pollici con risoluzione 4K e frequenza di aggiornamento di 144 Hz.",
      brand: "Acer",
      imageurl: "https://www.acer.com/it-it/monitors/predator-xb323ulp",
      price: 999
    },
    {
      name: "BenQ EX2780Q",
      description: "Un monitor da gioco da 27 pollici con risoluzione 2K e frequenza di aggiornamento di 165 Hz.",
      brand: "BenQ",
      imageurl: "https://www.benq.com/it-it/monitor/gaming/ex2780q.html",
      price: 599
    },
    {
      name: "Sony WH-CH710N",
      description: "Un paio di cuffie over-ear con cancellazione del rumore di fascia media.",
      brand: "Sony",
      imageurl: "https://www.sony.it/electronics/headband-headphones/wh-ch710n/p",
      price: 199
    },
    {
      name: "Apple Watch SE",
      description: "Un orologio intelligente di fascia media con un design elegante e un'ampia gamma di funzionalità.",
      brand: "Apple",
      imageurl: "https://www.apple.com/watch/se/",
      price: 299
    },
    {
      name: "Samsung Galaxy Tab S8",
      description: "Un tablet premium con un display da 11 pollici e un processore Qualcomm Snapdragon 8 Gen 1.",
      brand: "Samsung",
      imageurl: "https://www.samsung.com/it/tablets/galaxy-tab-s8/",
      price: 649
    },
];

const form = document.querySelector("#my-form");
const button = document.querySelector("#form-button");

const postFetch = async function () {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  try {
    const fetchProducts = await fetch(url, options);
    console.log(fetchProducts);
  } catch (error) {
    console.log("this is the error I found: ", error);
  }
};

form.addEventListener("submit", async event => {
    console.log("hellooo")
     var formData = new FormData(form);
    var object = {};

    formData.forEach(function(value, key){
    object[key] = value;
    })

    var json = JSON.stringify(object);
    let options = {
        method: "POST",
        body: json,
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDU5OTIwNzgsImV4cCI6MTcwNzIwMTY3OH0.g96ni3wzRQfJWp48pMhH2ekNatYJzxW1i7EjF2hkMbU",
            "Content-Type" : "application/json"
        }
    }

    postFetch() 
})
 */

const form = document.getElementById('my-form');
const button = document.querySelector('#try');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const data = new FormData(form);

  var object = {};

  data.forEach(function(value, key){
  object[key] = value;
  })

  var json = JSON.stringify(object);
  console.log(json)
  try {
    const res = await fetch(
      'https://striveschool-api.herokuapp.com/api/product/',
      {
        method: 'POST',
        body: json,
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDU5OTIwNzgsImV4cCI6MTcwNzIwMTY3OH0.g96ni3wzRQfJWp48pMhH2ekNatYJzxW1i7EjF2hkMbU",
            "Content-Type" : "application/json"
        }
      },
    );

    const resData = await res.json();
    console.log(resData);

  } catch (err) {
    console.log(err.message);
  }
});

button.addEventListener('click', async event => {
    try {
        const res = await fetch(
          'https://striveschool-api.herokuapp.com/api/product/',
          {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDU5OTIwNzgsImV4cCI6MTcwNzIwMTY3OH0.g96ni3wzRQfJWp48pMhH2ekNatYJzxW1i7EjF2hkMbU",
                "Content-Type" : "application/json"
            }
          }
        )
    const resData = await res.json();
    console.log(resData);
    } 
    catch (err) {
    console.log(err.message);
  }
})
      
  