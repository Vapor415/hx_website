// script.js
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");

    // 示例商品数据
    const products = [
        { name: "推荐1", image: "green1_00000.png", description: "这是商品1的描述。" },
        { name: "推荐2", image: "product2.jpg", description: "这是商品2的描述。" },
        { name: "推荐3", image: "product3.jpg", description: "这是商品3的描述。" },
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