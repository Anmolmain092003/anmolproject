const products = [
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    },
    {
        image: 'images/Group 105.png',
        name: 'CRYSTAL AGATE PHONE GRIP',
        price: '18.99$'
    }
];

// Function to create product cards dynamically
function renderProducts() {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <a href="#" class="btn-primary">Buy Now</a>
        `;

        productGrid.appendChild(productCard);
    });
}

// Call function to render products
renderProducts();