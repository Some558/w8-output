    // サインインボタンクリック時の処理
    document.getElementById('signinButton').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // メールアドレスをLocalStorageに保存
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    });