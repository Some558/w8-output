// ページが読み込まれたときの処理
window.addEventListener('load', () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
    }
    if (storedPassword) {
        document.getElementById('password').value = storedPassword;
    }
});

// サインインボタンクリック時の処理
document.getElementById('signinButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // メールアドレスとパスワードをLocalStorageに保存
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
});