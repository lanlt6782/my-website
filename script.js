/* ===================================================
   Search Ajax
=================================================== */

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

const products = [
    "MacBook Pro",
    "MacBook Air",
    "Mac mini",
    "iPhone 16",
    "iPad Pro",
    "Apple Watch"
];

if (searchInput) {

    searchInput.addEventListener("input", function () {

        searchResult.innerHTML = "<p>検索中...</p>";

        setTimeout(() => {

            const keyword = searchInput.value.trim().toLowerCase();

            searchResult.innerHTML = "";

            if (keyword === "") {

                return;

            }

            const result = products.filter(item =>
                item.toLowerCase().includes(keyword)
            );

            if (result.length === 0) {

                searchResult.innerHTML = "<p>商品がありません。</p>";

                return;

            }

            result.forEach(item => {

                const p = document.createElement("p");

                p.textContent = item;

                searchResult.appendChild(p);

            });

        }, 500);

    });

}

/* ===================================================
   Dropdown Ajax
=================================================== */

const categorySelect = document.getElementById("categorySelect");
const categoryResult = document.getElementById("categoryResult");

const categoryData = {

    pc: [
        "MacBook Pro",
        "ThinkPad",
        "Surface Laptop"
    ],

    book: [
        "JavaScript",
        "Playwright",
        "QA Testing"
    ],

    food: [
        "ラーメン",
        "寿司",
        "カレー"
    ]

};

if (categorySelect) {

    categorySelect.addEventListener("change", function () {

        categoryResult.innerHTML = "<p>読込中...</p>";

        setTimeout(() => {

            categoryResult.innerHTML = "";

            const list = categoryData[this.value];

            if (!list) {

                return;

            }

            list.forEach(item => {

                const p = document.createElement("p");

                p.textContent = item;

                categoryResult.appendChild(p);

            });

        }, 500);

    });

}

/* ===================================================
   Popup
=================================================== */

const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closePopup = document.getElementById("closePopup");

popupBtn.addEventListener("click", () => {

    popup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

/* ===================================================
   Modal
=================================================== */

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

/* ===================================================
   Toast
=================================================== */

const toast = document.getElementById("toast");
const toastBtn = document.getElementById("toastBtn");

toastBtn.addEventListener("click", () => {

    toast.style.display = "block";

    setTimeout(() => {

        toast.style.display = "none";

    }, 3000);

});

/* ===================================================
   Dynamic Text
=================================================== */

const addTextBtn = document.getElementById("addTextBtn");
const dynamicArea = document.getElementById("dynamicArea");

let textIndex = 1;

addTextBtn.addEventListener("click", () => {

    const p = document.createElement("p");

    p.textContent = `追加テキスト ${textIndex}`;

    dynamicArea.appendChild(p);

    textIndex++;

});

/* ===================================================
   Update Product
=================================================== */

const updateBtn = document.getElementById("updateBtn");
const priceText = document.getElementById("priceText");

let price = 150000;

updateBtn.addEventListener("click", () => {

    price += 10000;

    priceText.textContent = `価格：${price.toLocaleString()}円`;

});

/* ===================================================
   Close Popup / Modal when click background
=================================================== */

popup.addEventListener("click", e => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});

modal.addEventListener("click", e => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

console.log("Dynamic Content Demo Ready.");
