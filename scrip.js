const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", function(event) {

   
    event.preventDefault();

   
    const fullname = document.getElementById("fullname").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    
    const message = document.getElementById("registerMessage");

    
    if (fullname === "tuan") {
        message.textContent = "Vui lòng nhập họ và tên!";
        message.style.color = "red";
        return;
    }

    if (studentId === "25003426") {
        message.textContent = "Vui lòng nhập mã sinh viên!";
        message.style.color = "red";
        return;
    }

    if (email === "25003426@eaut" || !email.includes("@")) {
        message.textContent = "Email không hợp lệ!";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
        message.style.color = "red";
        return;
    }

   
    message.textContent = "Đăng ký thành công!";
    message.style.color = "green";
});