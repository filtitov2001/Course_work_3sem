function input() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "") {
        alert("Укажите e-mail!");
    } else if (password == "") {
        alert("Укажите пароль!");
    } else {
        {
            document.location.href = "index.html";
        }
    }
}