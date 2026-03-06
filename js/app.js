// Main handler
let cart = [];
function addToCart(product, callback) {
  console.log("Adding to cart...");
  setTimeout(() => {
    cart.push(product);
    callback();
  }, 1000);
}
function calculateTotal(callback) {
  setTimeout(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    callback(total);
  }, 1000);
}
function saveCart(callback) {
  console.log("Saving cart to database...");
  setTimeout(() => {
    localStorage.setItem("cart",JSON.stringify(cart))
    callback();
  }, 1000);
}
// function updateUI(name, price, total) {
//     const cartItems = document.querySelector("#cartItems")
//     const totalEl = document.querySelector("#total")

//     const li = document.createElement("li")
//     li.innerText = `${name} - Rs ${price}`
//     cartItems.appendChild(li)
//     totalEl.innerText=`${name} = ${price}`

//     cartItems.appendChild(li)
//     totalEl.innerText=total
// }

// function handleAddToCart(name, price) {
//   addToCart({ name, price }, function () {
//     calculateTotal(function (total) {
//       saveCart(function () {
//         updateUI(name, price, total);
//       });
//     });
//   });
// }
