// Add to cart
const productsContainer = document.querySelector("#product");

function fetchproducts(callback) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
}
function renderProducts(products) {
    products.forEach(product => {
     const card = document.createElement("div")

        card.innerHTML = `
        
         <img src="${product.image}" width="100">
         <h3>${product.title}</h3>
         <p>Price - ${product.price}</p>
         <button onclick="addProduct(${product.id})">Add To Cart</button>
        `
        productsContainer.appendChild(card)
       
 })
}
fetchproducts(function (products) {
    renderProducts(products)
})

function addProduct(id) {
    localStorage.setItem("productId",id)
    window.location.href="cart.html"
}
function addProduct(id){

localStorage.setItem("productId", id)

window.location.href = "cart.html"

}