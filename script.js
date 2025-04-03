// ボタンをクリックするとアラートを表示
function showMessage() {
    alert("私はランです。今年で33歳です 😊");
}

// メニューをクリックするとページの内容を変更
function loadPage(page) {
    let title = document.getElementById("title");
    let content = document.getElementById("main-content");

    if (!title || !content) {
        console.error("要素が見つかりません！");
        return;
    }

    if (page === "home") {
        title.innerHTML = "私のウェブサイトへようこそ！";
        content.innerHTML = "<p>こんにちは！私の名前はランです。私はCowell社のテスターです。</p>";
    } else if (page === "about") {
        title.innerHTML = "紹介";
        content.innerHTML = "<h1>こんにちは</h1><p>これは紹介ページです。</p>";
    } else if (page === "services") {
        title.innerHTML = "サービス";
        content.innerHTML = "<h1>こんにちは</h1><p>これはサービスページです。</p>";
    } else if (page === "contact") {
        title.innerHTML = "お問い合わせ";
        content.innerHTML = "<h1>こんにちは</h1><p>これはお問い合わせページです。</p>";
    }
}
