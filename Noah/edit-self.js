const form = document.getElementById("register")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    userEdit()
})

function userEdit() {
    var user = {};
    user.name = document.getElementById("username-input").value;
    user.password = document.getElementById("password-input").value;
    user.email = document.getElementById("email-input").value;
    
    var userJson = JSON.stringify(user);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState==4) {
            console.log("user modified");
        }
    }

    const id = document.getElementById("id-input").value;
    xhr.open("PUT", `http://localhost:8080/user/update/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(userJson);
}