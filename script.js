// script.js
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
    const overlay = document.getElementById("overlay");
    const zoomedImage = document.getElementById("zoomed-image");
    const closeBtn = document.querySelector(".close-btn");

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

        // 点击图片放大（兼容移动端）
        productImage.addEventListener("click", function () {
            openImage(this.src);
        });
        productImage.addEventListener("touchstart", function (e) {
            e.preventDefault(); // 阻止默认行为
            openImage(this.src);
        });
    });

    // 打开图片
    function openImage(src) {
        zoomedImage.src = src;
        overlay.style.display = "flex";
        zoomedImage.style.transform = "scale(1)"; // 重置缩放
    }

    // 关闭遮罩层
    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });
    closeBtn.addEventListener("touchstart", function (e) {
        e.preventDefault(); // 阻止默认行为
        overlay.style.display = "none";
    });

    // 点击遮罩层外部关闭
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
    overlay.addEventListener("touchstart", function (event) {
        if (event.target === overlay) {
            event.preventDefault(); // 阻止默认行为
            overlay.style.display = "none";
        }
    });

    // 图片缩放功能
    let currentScale = 1;
    zoomedImage.addEventListener("click", function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        currentScale += 0.5; // 每次点击放大 0.5 倍
        if (currentScale > 3) {
            currentScale = 1; // 超过 3 倍时重置
        }
        zoomedImage.style.transform = `scale(${currentScale})`;
    });
    zoomedImage.addEventListener("touchstart", function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        currentScale += 0.5; // 每次点击放大 0.5 倍
        if (currentScale > 3) {
            currentScale = 1; // 超过 3 倍时重置
        }
        zoomedImage.style.transform = `scale(${currentScale})`;
    });
});
