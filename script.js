const products = [
{
    id:1,
    name:"Gaming Laptop",
    category:"Electronics",
    price:1200,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},
{
    id:2,
    name:"Wireless Headphones",
    category:"Electronics",
    price:250,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},
{
    id:3,
    name:"Fashion Jacket",
    category:"Fashion",
    price:120,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
},
{
    id:4,
    name:"Running Shoes",
    category:"Shoes",
    price:95,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
},
{
    id:5,
    name:"Smart Watch",
    category:"Electronics",
    price:300,
    image:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600"
},
{
    id:6,
    name:"Designer T-Shirt",
    category:"Fashion",
    price:60,
    image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
}
];

let cart = [];

function displayProducts(items){

    const grid = document.getElementById("productGrid");

    grid.innerHTML = items.map(product => `
        <div class="product-card">
            <img src="${product.image}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <div class="price">$${product.price}</div>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>
            </div>
        </div>
    `).join("");
}

function addToCart(id){

    const product = products.find(item => item.id === id);

    cart.push(product);

    updateCart();
}

function updateCart(){

    document.getElementById("cartCount").textContent =
    cart.length;

    const cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <strong>$${item.price}</strong>
        </div>
    `).join("");

    const total =
    cart.reduce((sum,item)=>sum + item.price,0);

    document.getElementById("cartTotal")
    .textContent = total;
}

function toggleCart(){

    document.getElementById("cart")
    .classList.toggle("active");
}

function filterCategory(category){

    if(category === "All"){
        displayProducts(products);
        return;
    }

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);
}

document
.getElementById("searchInput")
.addEventListener("keyup", function(){

    const searchText =
    this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase()
        .includes(searchText)
    );

    displayProducts(filtered);
});

displayProducts(products);