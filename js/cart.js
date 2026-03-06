// from localStorage cart is added here

const cartContainer = document.querySelector("#cartProduct");
const productId = localStorage.getItem("productId");

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then((res) => res.json())

  .then((product) => {
    cartContainer.innerHTML = `

<img src="${product.image}" width="150">
<h2>${product.title}</h2>
<p>Price: ₹${product.price}</p>
<button>Add Payment</button>
`;
  });
