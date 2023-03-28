var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display) {
      panel.style.display = null;
    } else {
      panel.style.display = "block";
    }
  });
}

fetch("/furniture.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const furnitures = data.furnitures;
    furnitures.forEach((furniture) => {
      const productItemEl = document.createElement("div");
      productItemEl.classList.add("productItem");

      const imageEl = document.createElement("img");
      imageEl.src = furniture.img;
      imageEl.alt = furniture.name;
      imageEl.classList.add("productImage");

      const productInfoEl = document.createElement("div");
      productInfoEl.classList.add("productInfo");

      const priceEl = document.createElement("span");
      priceEl.classList.add("productPrice");
      priceEl.textContent = `$${furniture.price}`;

      const nameEl = document.createElement("span");
      nameEl.classList.add("productName");
      nameEl.textContent = furniture.name;

      productInfoEl.appendChild(priceEl);
      productInfoEl.appendChild(nameEl);
      productItemEl.appendChild(imageEl);
      productItemEl.appendChild(productInfoEl);
      document
        .querySelector("[data-js='productslist']")
        .appendChild(productItemEl);
    });
    slickProducts();
  })
  .catch((error) => console.log(`Fetch error: ${error}`));

$('[data-js="product-prev-btn"]').click(function () {
  $("[data-js='productslist']").slick("slickPrev");
});

$('[data-js="product-next-btn"]').click(function () {
  $("[data-js='productslist']").slick("slickNext");
});

function slickProducts() {
  $("[data-js='productslist']").slick({
    centerMode: true,
    arrows: false,
    variableWidth: true,
    infinite: false,
  });
}
