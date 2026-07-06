/* ===================================================
   Existing Function
=================================================== */

function showMessage() {

    document
        .getElementById("message")
        .classList
        .toggle("hidden");

}

/* ===================================================
   Translation Demo
=================================================== */

const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {

    submitBtn.addEventListener("click", () => {

        const input = document.getElementById("textInput");

        const result = document.getElementById("result");

        const value = input.value.trim();

        if (value === "") {

            result.innerHTML = "<p>入力してください。</p>";

            return;

        }

        result.innerHTML = `
            <p>${value}</p>
        `;

    });

}

/* ===================================================
   Popup
=================================================== */

const popup = document.getElementById("popup");

const popupBtn = document.getElementById("popupBtn");

const closePopup = document.getElementById("closePopup");

if (popupBtn) {

    popupBtn.addEventListener("click", () => {

        popup.classList.remove("hidden");

    });

}

if (closePopup) {

    closePopup.addEventListener("click", () => {

        popup.classList.add("hidden");

    });

}

/* ===================================================
   Modal
=================================================== */

const modal = document.getElementById("modal");

const modalBtn = document.getElementById("modalBtn");

const closeModal = document.getElementById("closeModal");

if (modalBtn) {

    modalBtn.addEventListener("click", () => {

        modal.classList.remove("hidden");

    });

}

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.classList.add("hidden");

    });

}

/* ===================================================
   Accordion
=================================================== */

const accordion = document.querySelector(".accordion");

if (accordion) {

    accordion.addEventListener("click", () => {

        const content = accordion.nextElementSibling;

        content.classList.toggle("show");

    });

}

/* ===================================================
   Ajax Tab
=================================================== */

const tabContent = document.getElementById("tabContent");

const tabs = document.querySelectorAll(".tab-btn");

const tabData = {

    1: `
        <h3>商品情報</h3>
        <p>Apple MacBook Pro M5</p>
        <p>価格：250,000円</p>
        <p>発売日：2026年3月</p>
    `,

    2: `
        <h3>レビュー</h3>
        <p>★★★★★</p>
        <p>非常に高速です。</p>
        <p>翻訳品質確認用レビュー。</p>
    `,

    3: `
        <h3>QA情報</h3>
        <p>MutationObserver Test</p>
        <p>Dynamic Content Test</p>
        <p>Chrome Extension Test</p>
    `

};

tabs.forEach(btn => {

    btn.addEventListener("click", () => {

        const id = btn.dataset.tab;

        tabContent.innerHTML = "<p>Loading...</p>";

        setTimeout(() => {

            tabContent.innerHTML = tabData[id];

        }, 1000);

    });

});

/* ===================================================
   Load More
=================================================== */

const loadBtn = document.getElementById("loadMoreBtn");

const loadContainer = document.getElementById("loadContainer");

let loadCount = 1;

if (loadBtn) {

    loadBtn.addEventListener("click", () => {

        loadBtn.disabled = true;

        loadBtn.innerText = "Loading...";

        setTimeout(() => {

            for (let i = 1; i <= 5; i++) {

                const p = document.createElement("p");

                p.textContent =
                    `追加データ ${loadCount}-${i} （${new Date().toLocaleTimeString()}）`;

                loadContainer.appendChild(p);

            }

            loadCount++;

            loadBtn.disabled = false;

            loadBtn.innerText = "Load More";

        }, 1200);

    });

});
/* ===================================================
   Infinite Scroll
=================================================== */

const infiniteContainer = document.getElementById("infiniteContainer");

let infiniteIndex = 1;

function createInfiniteItem() {

    const div = document.createElement("div");

    div.className = "infinite-item";

    div.innerHTML = `
        <h4>商品 ${infiniteIndex}</h4>
        <p>これはInfinite Scrollで追加されたテキストです。</p>
        <p>${new Date().toLocaleTimeString()}</p>
    `;

    infiniteContainer.appendChild(div);

    infiniteIndex++;

}

if (infiniteContainer) {

    for (let i = 0; i < 8; i++) {

        createInfiniteItem();

    }

    infiniteContainer.addEventListener("scroll", () => {

        if (
            infiniteContainer.scrollTop +
            infiniteContainer.clientHeight >=
            infiniteContainer.scrollHeight - 5
        ) {

            setTimeout(() => {

                for (let i = 0; i < 5; i++) {

                    createInfiniteItem();

                }

            }, 800);

        }

    });

}

/* ===================================================
   Search Ajax
=================================================== */

const searchInput = document.getElementById("searchInput");

const searchResult = document.getElementById("searchResult");

const products = [

    "MacBook Pro",
    "MacBook Air",
    "iPhone 16",
    "iPhone 16 Pro",
    "Apple Watch",
    "AirPods Pro",
    "QA Testing Book",
    "Chrome Extension Guide",
    "JavaScript Book",
    "Playwright TypeScript"

];

if (searchInput) {

    searchInput.addEventListener("input", () => {

        searchResult.innerHTML = "<p>検索中...</p>";

        setTimeout(() => {

            const keyword = searchInput.value.toLowerCase();

            searchResult.innerHTML = "";

            const result = products.filter(item =>

                item.toLowerCase().includes(keyword)

            );

            if (result.length === 0) {

                searchResult.innerHTML =

                    "<p>検索結果がありません。</p>";

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
   Duplicate Text
=================================================== */

const duplicateBtn = document.getElementById("duplicateBtn");

const duplicateArea = document.getElementById("duplicateArea");

if (duplicateBtn) {

    duplicateBtn.addEventListener("click", () => {

        const p = document.createElement("p");

        p.textContent =

            "この文章は毎回同じ内容です。";

        duplicateArea.appendChild(p);

    });

}

/* ===================================================
   Replace Text
=================================================== */

const replaceBtn = document.getElementById("replaceBtn");

const replaceText = document.getElementById("replaceText");

let replaceIndex = 1;

if (replaceBtn) {

    replaceBtn.addEventListener("click", () => {

        replaceText.textContent =

            `更新された文章 ${replaceIndex} (${new Date().toLocaleTimeString()})`;

        replaceIndex++;

    });

}

/* ===================================================
   Remove DOM
=================================================== */

const removeBtn = document.getElementById("removeBtn");

const removeArea = document.getElementById("removeArea");

if (removeBtn) {

    removeBtn.addEventListener("click", () => {

        if (removeArea.firstElementChild) {

            removeArea.firstElementChild.remove();

        }

    });

}

/* ===================================================
   Dropdown Ajax
=================================================== */

const categorySelect = document.getElementById("categorySelect");

const categoryResult = document.getElementById("categoryResult");

const categoryData = {

    book: `

        <h4>本一覧</h4>

        <p>Playwright実践ガイド</p>

        <p>JavaScript完全入門</p>

        <p>QAテスト設計</p>

    `,

    pc: `

        <h4>パソコン一覧</h4>

        <p>MacBook Pro</p>

        <p>ThinkPad X1</p>

        <p>Surface Laptop</p>

    `,

    food: `

        <h4>食品一覧</h4>

        <p>寿司</p>

        <p>ラーメン</p>

        <p>カレーライス</p>

    `

};

if (categorySelect) {

    categorySelect.addEventListener("change", () => {

        categoryResult.innerHTML =

            "<p>Loading...</p>";

        setTimeout(() => {

            categoryResult.innerHTML =

                categoryData[categorySelect.value] || "";

        }, 700);

    });

}

/* ===================================================
   Auto Update
=================================================== */

const autoBtn = document.getElementById("autoBtn");
const autoArea = document.getElementById("autoArea");

let autoRunning = false;
let autoTimer = null;
let autoIndex = 1;

if (autoBtn) {

    autoBtn.addEventListener("click", () => {

        if (autoRunning) {

            clearInterval(autoTimer);

            autoRunning = false;

            autoBtn.innerText = "自動追加開始";

            return;

        }

        autoRunning = true;

        autoBtn.innerText = "停止";

        autoTimer = setInterval(() => {

            const p = document.createElement("p");

            p.className = "auto-item";

            p.textContent =
                `自動生成テキスト ${autoIndex} (${new Date().toLocaleTimeString()})`;

            autoArea.appendChild(p);

            autoIndex++;

        }, 5000);

    });

}

/* ===================================================
   Toast Notification
=================================================== */

const toastBtn = document.getElementById("toastBtn");
const toast = document.getElementById("toast");

if (toastBtn) {

    toastBtn.addEventListener("click", () => {

        toast.innerText =
            `保存しました (${new Date().toLocaleTimeString()})`;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    });

}

/* ===================================================
   Fake SPA Routing
=================================================== */

const page1Btn = document.getElementById("page1Btn");
const page2Btn = document.getElementById("page2Btn");

const spaContent = document.getElementById("spaContent");

if (page1Btn) {

    page1Btn.addEventListener("click", () => {

        history.pushState({}, "", "#page1");

        spaContent.innerHTML = `

            <h3>Page 1</h3>

            <p>これはPage1です。</p>

            <p>QAテストページです。</p>

        `;

    });

}

if (page2Btn) {

    page2Btn.addEventListener("click", () => {

        history.pushState({}, "", "#page2");

        spaContent.innerHTML = `

            <h3>Page 2</h3>

            <p>Dynamic Contentが変更されました。</p>

            <p>Chrome Extension確認用。</p>

        `;

    });

}

/* ===================================================
   Random Dynamic Text
=================================================== */

const randomTexts = [

    "Apple MacBook",
    "Playwright Testing",
    "Chrome Extension",
    "MutationObserver",
    "Dynamic Content",
    "QA Automation",
    "Redis Storage",
    "Translation Phrase",
    "JavaScript",
    "TypeScript"

];

setInterval(() => {

    const cards = document.querySelectorAll(".card");

    if (cards.length === 0) return;

    const randomCard =

        cards[Math.floor(Math.random() * cards.length)];

    const p = document.createElement("p");

    p.textContent =
        randomTexts[Math.floor(Math.random() * randomTexts.length)];

    randomCard.appendChild(p);

}, 15000);

/* ===================================================
   Auto Remove Old Auto Text
=================================================== */

setInterval(() => {

    const items = autoArea.querySelectorAll(".auto-item");

    if (items.length > 5) {

        items[0].remove();

    }

}, 8000);

/* ===================================================
   Live Clock
=================================================== */

const clock = document.createElement("h3");

clock.style.marginTop = "20px";

document.body.appendChild(clock);

setInterval(() => {

    clock.textContent =
        "現在時刻 : " + new Date().toLocaleTimeString();

}, 1000);

/* ===================================================
   Random Notification
=================================================== */

setInterval(() => {

    const div = document.createElement("div");

    div.style.marginTop = "10px";

    div.style.padding = "10px";

    div.style.background = "#FFF3CD";

    div.style.border = "1px solid #FFEEBA";

    div.textContent =
        "システム通知 : " + new Date().toLocaleTimeString();

    document.querySelector(".container").prepend(div);

    setTimeout(() => {

        div.remove();

    }, 6000);

}, 20000);

/* ===================================================
   Console Log
=================================================== */

console.log("Dynamic Test Page Ready.");
