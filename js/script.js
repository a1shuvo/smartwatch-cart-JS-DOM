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
            button.classList.remove("border-purple-600");
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
