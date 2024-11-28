const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <div>
        <img src="${item.img}" alt="${item.name}" width="50">
        <span>${item.name}</span>
        <span>Rs. ${item.price}</span>
        <button onclick="updateQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${index}, 1)">+</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
  totalPrice.textContent = total;
}

function updateQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity === 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("Checkout successful!");
  localStorage.clear();
  renderCart();
}

renderCart();
