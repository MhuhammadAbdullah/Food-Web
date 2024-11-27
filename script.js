let cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const item = e.target.dataset.item;
    const price = parseFloat(e.target.dataset.price);
    cart.push({ item, price });

    alert(`${item} has been added to your cart.`);
    console.log(cart);
  });
});
