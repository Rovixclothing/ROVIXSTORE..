let products = [
  {
    id: 1,
    name: "Rovix Oversized Tee",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Rovix Boxy Tee",
    price: 899,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80"
  }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products");

  container.innerHTML = products.map(product => `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <div class="productInfo">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">
          ADD TO CART
        </button>
      </div>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;

  const items = document.getElementById("cartItems");

  items.innerHTML = cart.map(item => `
    <div class="cartItem">
      <span>${item.name}</span>
      <span>₹${item.price}</span>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  document.getElementById("cartTotal").innerText = total;
}

function openCart() {
  document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Order system will be connected to the secure ROVIX backend.");
}

displayProducts();
