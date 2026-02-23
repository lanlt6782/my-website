function showMessage() {
    const message = document.getElementById("message");

    message.textContent = "ご覧いただきありがとうございます！今後もコンテンツを追加予定です。";
    message.classList.remove("hidden");

    message.style.opacity = 0;
    let opacity = 0;

    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        opacity += 0.05;
        message.style.opacity = opacity;
    }, 30);
}
