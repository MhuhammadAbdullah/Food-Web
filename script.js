// ==========location Selection area==========
function showLocationPopup() {
  document.getElementById('location-popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('location-popup').style.display = 'none';
}
// Select all buttons
const deliveryPickupButtons = document.querySelectorAll('.delivery-pickup-buttons button');

// Add click event listener to each button
deliveryPickupButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    deliveryPickupButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');
  });
});

// =============Category Nav Section===============
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("div[id]"); // Sections with IDs
  const categoryLinks = document.querySelectorAll(".categories-nav .category-link");

  // Function to detect active section
  const updateActiveCategory = () => {
    let activeSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection = section;
      }
    });

    // Remove active class from all links
    categoryLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the corresponding link
    if (activeSection) {
      const activeLink = document.querySelector(`.categories-nav .category-link[href="#${activeSection.id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  };

  // Listen to scroll event
  window.addEventListener("scroll", updateActiveCategory);
});

// =============Cart Popup==========

// // Initial quantity
// let quantity = 1;

// // Get elements
// const quantityDisplay = document.getElementById('quantity');
// const productPrice = document.getElementById('product-price');
// const basePrice = 1395; // Base price of the product
// const popup = document.getElementById('popup');
// const addToCartButton = document.getElementById('add-to-cart');

// // Quantity increase/decrease buttons
// document.getElementById('increase-btn').addEventListener('click', () => {
//   quantity++;
//   updateQuantity();
// });

// document.getElementById('decrease-btn').addEventListener('click', () => {
//   if (quantity > 1) {
//     quantity--;
//     updateQuantity();
//   }
// });

// // Update quantity and price
// function updateQuantity() {
//   quantityDisplay.textContent = quantity;
//   productPrice.textContent = `Rs. ${basePrice * quantity}`;
// }

// // Add to Cart functionality
// addToCartButton.addEventListener('click', () => {
//   alert(`You have added ${quantity} item(s) to the cart. Total: Rs. ${basePrice * quantity}`);
// });

// // Close popup
// function closePopup() {
//   popup.classList.add('hidden');
// }


// ncxmcxn,x
  // // Get popup and its elements
  // const popup = document.getElementById('popup');
  // const productImage = document.getElementById('product-image');
  // const productName = document.getElementById('product-name');
  // const productPrice = document.getElementById('product-price');
  // const productDesc = document.getElementById('product-desc');
  // const addToCartButton = document.getElementById('add-to-cart');

  // // Open popup with product details
  // document.querySelectorAll('.card').forEach((card) => {
  //   card.addEventListener('click', () => {
  //     const productId = card.getAttribute('data-id');
  //     const productNameText = card.getAttribute('data-name');
  //     const productPriceText = card.getAttribute('data-price');
  //     const productImgSrc = card.getAttribute('data-img');
  //     const productDescText = card.querySelector('p').innerText;

  //     // Populate popup with product details
  //     productImage.src = productImgSrc;
  //     productName.innerText = productNameText;
  //     productPrice.innerText = `Rs. ${productPriceText}`;
  //     productDesc.innerText = productDescText;
  //     addToCartButton.innerText = `Add to Cart - Rs. ${productPriceText}`;

  //     // Show popup
  //     popup.style.display = 'block';
  //   });
  // });

  // // Close popup
  // function closePopup() {
  //   popup.style.display = 'none';
  // }

  // // Quantity adjustment functionality
  // let quantity = 1;
  // const quantitySpan = document.getElementById('quantity');
  // document.getElementById('increase-btn').addEventListener('click', () => {
  //   quantity++;
  //   quantitySpan.innerText = quantity;
  // });
  // document.getElementById('decrease-btn').addEventListener('click', () => {
  //   if (quantity > 1) {
  //     quantity--;
  //     quantitySpan.innerText = quantity;
  //   }
  // });



  //================ xzcvcvbnmz

// // Get popup and its elements
// const popup = document.getElementById('popup');
// const productImage = document.getElementById('product-image');
// const productName = document.getElementById('product-name');
// const productPrice = document.getElementById('product-price');
// const productDesc = document.getElementById('product-desc');
// const addToCartButton = document.getElementById('add-to-cart');

// // Open popup with product details
// document.querySelectorAll('.card').forEach((card) => {
//   card.addEventListener('click', () => {
//     const productId = card.getAttribute('data-id');
//     const productNameText = card.getAttribute('data-name');
//     const productPriceText = card.getAttribute('data-price');
//     const productImgSrc = card.getAttribute('data-img');
//     const productDescText = card.querySelector('p').innerText;

//     // Populate popup with product details
//     productImage.src = productImgSrc;
//     productName.innerText = productNameText;
//     productPrice.innerText = `Rs. ${productPriceText}`;
//     productDesc.innerText = productDescText;
//     addToCartButton.innerText = `Add to Cart - Rs. ${productPriceText}`;

//     // Show popup
//     popup.style.display = 'block';
//   });
// });

// // Close popup
// function closePopup() {
//   popup.style.display = 'none';
// }

// // Close popup when 'Add to Cart' button is clicked
// addToCartButton.addEventListener('click', () => {
//   // Perform any actions for adding to cart here (e.g., update cart)
//   closePopup();  // Close the popup
// });

// // Quantity adjustment functionality
// let quantity = 1;
// const quantitySpan = document.getElementById('quantity');
// document.getElementById('increase-btn').addEventListener('click', () => {
//   quantity++;
//   quantitySpan.innerText = quantity;
// });
// document.getElementById('decrease-btn').addEventListener('click', () => {
//   if (quantity > 1) {
//     quantity--;
//     quantitySpan.innerText = quantity;
//   }
// });

// Select elements
// const productCard = document.getElementById('product1');
// const popup = document.getElementById('popup');
// const closePopup = document.getElementById('closePopup');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');
// const quantity = document.getElementById('quantity');

// // Show popup on product click
// productCard.addEventListener('click', () => {
//   popup.classList.add('active');
// });

// // Close popup on close button click
// closePopup.addEventListener('click', () => {
//   popup.classList.remove('active');
// });

// // Adjust quantity
// increase.addEventListener('click', () => {
//   quantity.textContent = parseInt(quantity.textContent) + 1;
// });

// decrease.addEventListener('click', () => {
//   const currentQuantity = parseInt(quantity.textContent);
//   if (currentQuantity > 1) {
//     quantity.textContent = currentQuantity - 1;
//   }
// });

// Get popup and its elements
const popup = document.getElementById('popup');
const productImage = document.getElementById('product-image');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productDesc = document.getElementById('product-desc');
const addToCartButton = document.getElementById('add-to-cart');

// Initially hide the popup
popup.style.display = 'none';

// Open popup with product details
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const productId = card.getAttribute('data-id');
    const productNameText = card.getAttribute('data-name');
    const productPriceText = card.getAttribute('data-price');
    const productImgSrc = card.getAttribute('data-img');
    const productDescText = card.querySelector('p').innerText;

    // Populate popup with product details
    productImage.src = productImgSrc;
    productName.innerText = productNameText;
    productPrice.innerText = `Rs. ${productPriceText}`;
    productDesc.innerText = productDescText;
    addToCartButton.innerText = `Add to Cart - Rs. ${productPriceText}`;

    // Show popup
    popup.style.display = 'block';
  });
});

// Close popup
function closePopup() {
  popup.style.display = 'none';
}

// Close popup when 'Add to Cart' button is clicked
addToCartButton.addEventListener('click', () => {
  // Perform any actions for adding to cart here (e.g., update cart)
  closePopup();  // Close the popup
});

// Quantity adjustment functionality
let quantity = 1;
const quantitySpan = document.getElementById('quantity');
document.getElementById('increase-btn').addEventListener('click', () => {
  quantity++;
  quantitySpan.innerText = quantity;
});
document.getElementById('decrease-btn').addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.innerText = quantity;
  }
});
