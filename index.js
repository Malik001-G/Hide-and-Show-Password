const eyeIcon = document.getElementById("eyeicon");
const password = document.getElementById("password");


eyeIcon.onclick = () => {
    if (password.type == "password" && password.value != "") {
        password.type = "text";
        eyeIcon.src = "eye-open.png"
    } else {
        password.type = "password";
        eyeIcon.src = "eye-close.png"
    }
}