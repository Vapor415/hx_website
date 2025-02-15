// script.js
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");

    // 示例商品数据
    const products = [
        { name: "推荐1", image: "tj1.png", description: "" },
        { name: "推荐2", image: "tj2.jpg", description: "" },
        { name: "推荐3", image: "tj3.jpg", description: "" },
        { name: "推荐4", image: "tj4.png", description: "" },
        { name: "推荐5", image: "tj5.png", description: "" },
        { name: "推荐6", image: "tj6.jpg", description: "" },
        // 添加更多商品数据
    ];

    // 动态生成商品展示
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productDescription);

        productContainer.appendChild(productItem);
    });
});
