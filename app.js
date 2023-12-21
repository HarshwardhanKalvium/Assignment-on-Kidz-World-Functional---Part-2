let productArr = document.querySelectorAll(".container>div");
let cartValue = document.getElementById("cart-value");
let cartBtn = document.getElementById("cart");
let count = 0;
let total = 0;
let cartObj = {};

for (let i = 0; i < productArr.length; i++) {
  let product = productArr[i];
  let buttonElements = product.getElementsByClassName("button");

  for (let j = 0; j < buttonElements.length; j++) {
    let button = buttonElements[j];
    button.addEventListener("click", function () {
      addToCart(product);
    });
  }
}

function addToCart(product) {
  let Name = product.querySelector("h3").textContent;
  let price = product.querySelector("p").textContent;

  if (cartObj[Name] == undefined) {
    cartObj[Name] = 1;
  } else {
    cartObj[Name]++;
  }

  count++;
  price = Number(price.slice(1));
  total += price;

  cartValue.innerText = count;
}

cartBtn.addEventListener("click", showDetails);

function showDetails() {
  let orderDetails = "Order Details:\n";
  for (let keys in cartObj) {
    orderDetails += `Item Name: ${keys} - Quantity: ${cartObj[keys]}\n`;
  }

  let dollars = Math.floor(total);
  let cents = Math.floor((total % 1) * 100);
  let totalAmount = `The total amount is ${dollars} $ and ${cents} cents.`;

  // Create a WhatsApp message with the order details and total amount
  let whatsappMessage = encodeURIComponent(`${orderDetails}\n${totalAmount}`);

  // Create a WhatsApp link with the generated message
  let whatsappLink = `https://wa.me/919545453991?text=${whatsappMessage}`;

  // Open the link in a new window or tab
  window.open(whatsappLink, "_blank");
}

cartBtn.addEventListener("click", showDetails);

