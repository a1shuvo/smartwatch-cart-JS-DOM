/* Using nested for loops  */

// const brandColorBtns = document.querySelectorAll(".ring-button");
// let productImageBase = "../images/";

// for (let i = 0; i < brandColorBtns.length; i++) {
//     const colorBtn = brandColorBtns[i];
//     colorBtn.addEventListener("click", function (event) {
//         const color = event.target.id.replace("-color", "");

//         for (let j = 0; j < brandColorBtns.length; j++) {
//             brandColorBtns[j].classList.remove("border-purple-600");
//             brandColorBtns[j].classList.add("border-gray-300");  
//         }

//         event.target.classList.add("border-purple-600");
//         event.target.classList.remove("border-gray-300");

//         const productImage = document.getElementById("product-image");
//         productImage.src = productImageBase + color + ".png";

//     });
// };


/* Using Nested forEach Loop */

// const brandColorBtns = document.querySelectorAll(".ring-button");
// let productImageBase = "../images/";

// brandColorBtns.forEach(ColorBtn => {
//     ColorBtn.addEventListener("click", function (event) {


//         brandColorBtns.forEach(element => {
//             element.classList.replace("border-purple-600", "border-gray-300");
//         });
//         event.target.classList.replace("border-gray-300", "border-purple-600");

//         const color = event.target.id.replace("-color", "");
//         const productImage = document.getElementById("product-image");
//         productImage.src = productImageBase + color + ".png";
//     });

// });


/* Using Event Delegation */

const productImageBase = "../images/";
const container = document.querySelector(".brand-color-container"); // Assuming buttons are wrapped in a container

container.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("ring-button")) {
        // Find previously selected button (if any)
        const selectedBtn = container.querySelector(".ring-button.border-purple-600");

        // If there was a previously selected button, reset its border
        if (selectedBtn) {
            selectedBtn.classList.replace("border-purple-600", "border-gray-300");
        }

        // Set the border for the clicked button
        target.classList.replace("border-gray-300", "border-purple-600");

        // Update the product image
        const color = target.id.replace("-color", "");
        document.getElementById("product-image").src = `${productImageBase}${color}.png`;
    }
});


function selectWristSize(size) {
    const sizes = ["S", "M", "L", "XL"];
    for (let i = 0; i < sizes.length; i++) {
        const button = document.getElementById("size-" + sizes[i]);
        const elemnt = sizes[i];
        if (size === elemnt) {
            button.classList.add("border-purple-600");
        } else {
            button.classList.replace("border-purple-600", "border-gray-300");
        }
    }
}


// const quantityBtns =  document.querySelectorAll(".quantity-button");
// for (const btn of quantityBtns) {
//     btn.addEventListener("click", function (event) {
//         const amount = event.target.innerText === "+" ? 1 : -1;
//         const quantityElements = document.getElementById("quantity");
//         const currentQuantity = parseInt(quantityElements.innerText);
//         const newQuantity = Math.max(0, currentQuantity + amount);
//        quantityElements.innerText = newQuantity;
//     });
// }

/* Another Approach */
let currentQuantity = 0;  // Initialize quantity variable

document.querySelectorAll(".quantity-button").forEach(btn => {
    btn.addEventListener("click", ({ target }) => {
        const amount = target.innerText === "+" ? 1 : -1;
        currentQuantity = Math.max(0, currentQuantity + amount);  // Update quantity
        document.getElementById("quantity").innerText = currentQuantity;  // Update the DOM
    });
});


// Add to Cart

let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").innerText);
    if (quantity > 0) {
        document.getElementById("checkout-container").classList.remove("hidden");
        cartCount += quantity;
        document.getElementById("cart-count").innerText = cartCount;

        const selectedColorBtn = document.querySelector("button.border-purple-600.w-6");
        const selectedColor = selectedColorBtn ? selectedColorBtn.id.split("-")[0] : "purple";

        const selectedSizeBtn = document.querySelector("button.border-purple-600:not(.w-6)");
        const selectedSize = selectedSizeBtn ? selectedSizeBtn.innerText.split(" ")[0] : "S";

        const selectedPrice = selectedSizeBtn.innerText.split(" ")[1].split("$")[1];

        cartItems.push({
            image: selectedColor + ".png",
            title: "Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: quantity * parseInt(selectedPrice),
        });

    } else {
        alert("Please select a quantity!");
    }

});


// Checkout & Cart Preview

document.getElementById("checkout-btn").addEventListener("click", function () {

    const cartConatainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;
    cartConatainer.innerHTML = "";


    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const row = document.createElement("tr");
        row.classList.add("border-b");
        row.innerHTML = `
        <td class="py-2 px-4">
            <div class="flex items-center space-x-2">
                <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
                <span class="font-semibold">${item.title}</span>
            </div>
        </td>
        <td class="py-2 px-4">${item.color}</td>
        <td class="py-2 px-4">${item.size}</td>
        <td class="py-2 px-4">${item.quantity}</td>
        <td class="py-2 px-4">$${item.price}</td>
        `;
        cartConatainer.appendChild(row);
        totalPrice += item.price;

        totalPriceElement.innerText = "$" + totalPrice;

    }

    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.remove("hidden");

});

document.getElementById("continue-shopping").addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
});

