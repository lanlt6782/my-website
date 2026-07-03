// ===============================================
// Portfolio JavaScript
// ===============================================

// Khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Translation Demo
    // ==========================

    const input = document.getElementById("textInput");
    const button = document.getElementById("submitBtn");
    const result = document.getElementById("result");

    if (button && input && result) {

        button.addEventListener("click", () => {

            const value = input.value.trim();

            if (value === "") {

                result.innerHTML =
                    "<span style='color:#999'>ここに入力した内容が表示されます。</span>";

                showToast("入力してください 😊");

                return;

            }

            result.textContent = value;

            showToast("表示しました 🎉");

        });

        // Enter để submit
        input.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                button.click();

            }

        });

    }

    // ==========================
    // Fade In Card
    // ==========================

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s";

        observer.observe(card);

    });

});

// ===============================================
// Detail Button
// ===============================================

function showMessage() {

    const msg = document.getElementById("message");

    if (msg.classList.contains("hidden")) {

        msg.classList.remove("hidden");

    } else {

        msg.classList.add("hidden");

    }

}

// ===============================================
// Toast
// ===============================================

function showToast(text) {

    const toast = document.createElement("div");

    toast.innerText = text;

    toast.style.position = "fixed";
    toast.style.right = "20px";
    toast.style.bottom = "20px";

    toast.style.background = "#4fc3f7";
    toast.style.color = "white";

    toast.style.padding = "12px 20px";

    toast.style.borderRadius = "30px";

    toast.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

    toast.style.zIndex = "9999";

    toast.style.fontSize = "15px";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 10);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2000);

}

// ===============================================
// Back To Top Button
// ===============================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";

topButton.style.width = "50px";
topButton.style.height = "50px";

topButton.style.border = "none";
topButton.style.borderRadius = "50%";

topButton.style.background = "#66d1ff";
topButton.style.color = "white";

topButton.style.fontSize = "22px";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
