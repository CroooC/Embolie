// Show the correct collection when page loads
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');

    // Hide all products
    document.querySelectorAll('.product').forEach(el => {
        el.classList.remove('active');
    });

    // Show the requested product
    const selectedProduct = document.getElementById(product);
    if (selectedProduct) {
        selectedProduct.classList.add('active');
        selectedProduct.querySelector('.product-title').textContent = product;
    }
});

// Change photo
function changeImage(thumbnail) {
    // Find the parent product container
    const productContainer = thumbnail.closest('.product');

    // Get the main image within this specific product
    const mainImage = productContainer.querySelector('.main-image');

    // Update main image src
    mainImage.src = thumbnail.src;

    // Update thumbnail selection within this specific product
    productContainer.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// Change image thanks to the color
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function () {
        // Find the parent product container
        const productContainer = this.closest('.product');

        // Update selected color
        productContainer.querySelectorAll('.color-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        this.classList.add('selected');

        // Change the main image
        const mainImage = productContainer.querySelector('.main-image');
        const newImageSrc = this.getAttribute('data-image');
        if (newImageSrc) {
            mainImage.src = newImageSrc;
        }
    });
});


// Color selection
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector('.color-option.selected').classList.remove('selected');
        option.classList.add('selected');
    });
});

// Size selection
document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector('.size-option.selected').classList.remove('selected');
        option.classList.add('selected');
    });
});
