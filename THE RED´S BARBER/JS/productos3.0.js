const productosBarberia = [
  { id: 1, nombre: "Peines de barberos", precio: 800 },
  { id: 2, nombre: "Cepillos para el cabello", precio: 2790 },
  { id: 3, nombre: "Cepillos para la barba", precio: 780 },
  { id: 4, nombre: "Cepillos para el cuello", precio: 980 },
  { id: 5, nombre: "Tijeras de peluqueria", precio: 3350 },
  { id: 6, nombre: "Máquina cortapelos KEMEI", precio: 25000 },
  { id: 7, nombre: "Navajas de afeitar y cuchillas", precio: 1500 },
  { id: 8, nombre: "Capas para Peluqueria", precio: 2350 },
  { id: 9, nombre: "Papel rollo para el cuello JESSAMY", precio: 1200 },
  { id: 10, nombre: "Secador BELPROF", precio: 19900 },
];

function addToCart(productId) {
  const product = productosBarberia.find((p) => p.id === productId);
  if (product) {
    updateCart(product);
 /*    showAlert(`Se agregó "${product.nombre}" al carrito.`); */
  }
}

function removeFromCart(productId) {
  const product = productosBarberia.find((p) => p.id === productId);
  if (product) {
    removeCartItem(productId);
    showAlert(`Se eliminó "${product.nombre}" del carrito.`);
  }
}

function showCartItems() {
  const cartItemsElement = document.getElementById("cartItems");
  cartItemsElement.innerHTML = "";

  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    cartItemsElement.textContent = "El carrito está vacío.";
    return;
  }

  const ul = document.createElement("ul");
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.nombre;
    ul.appendChild(li);
  });

  cartItemsElement.appendChild(ul);
}

function updateCart(product) {
  const cartItems = getCartItems();
  cartItems.push(product);
  saveCartItems(cartItems);
  showCartItems();
  calculateTotal();
}

function removeCartItem(productId) {
  const cartItems = getCartItems();
  const updatedCartItems = cartItems.filter((item) => item.id !== productId);
  saveCartItems(updatedCartItems);
  showCartItems();
  calculateTotal();
}

function getCartItems() {
  const cartItems = localStorage.getItem("productosBarberia");
  return cartItems ? JSON.parse(cartItems) : [];
}

function saveCartItems(cartItems) {
  localStorage.setItem("productosBarberia", JSON.stringify(cartItems));
}

function calculateTotal() {
  const cartItems = getCartItems();
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);
  document.getElementById("cartTotal").textContent = total.toFixed(2);
}

function finalizePurchase() {
  const cartItems = getCartItems();
  if (cartItems.length === 0) {
    console.log("El carrito está vacío.");
    return;
  }

  console.log("Compra realizada:", cartItems);
  showAlert("Compra finalizada.");
  clearCart();
}

function clearCart() {
  const cartItems = [];
  saveCartItems(cartItems);
  showCartItems();
  calculateTotal();
  console.log("El carrito se ha vaciado.");
}

function showAlert(message) {
  alert(message);
  console.log(message);
}

function initialize() {
  showCartItems();
  calculateTotal();
}

initialize();

//archivo JSON

var url = "../JS/JSON/productos3.0.json";

function mostrarProductos(productos) {
  console.log("Productos:");
  productos.forEach(function (producto) {
    console.log("ID: " + producto.id);
    console.log("Nombre: " + producto.nombre);
    console.log("Precio: " + producto.precio);
    console.log("Stock: " + producto.stock);
    console.log("-------------------");
  });
}

fetch(url)
  .then((response) => response.json())
  .then((productos) => {
    mostrarProductos(productos);

    localStorage.setItem("productos", JSON.stringify(productos));
  })
  .catch((error) => console.log("Error al cargar el archivo JSON:", error));

const addToCartButtons = document.querySelectorAll(".addToCartButton");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product");
    Swal.fire({
      title: "¡Producto agregado!",
      text: `Has añadido "${productId}" al carrito.`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  });
});


