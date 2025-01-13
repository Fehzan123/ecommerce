// This function will fetch product data from an API and display it
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    // Show the loader while fetching data
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    // Replace with your actual API endpoint
    const apiUrl = 'https://fakestoreapi.com/products';  // Example API

    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        // Hide the loader once data is fetched
        loader.style.display = 'none';
    }
}

function displayProducts(products) {
    const shopContainer = document.querySelector('.shopcontainer');
    shopContainer.innerHTML = ''; // Clear any previous content

    // Limit the number of products to display
    const maxProducts = 30; // Adjust the number as needed
    const limitedProducts = products.slice(0, maxProducts);

    limitedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title.substring(0,20)}...</h3>
            <p>${product.description.substring(0, 20)}...</p>
            <div class="price">$${product.price}</div>
            <button>Add to cart</button>`;
        
        shopContainer.appendChild(productCard);
    });
}
