function userSave() {

    var user = {};
    user.name = document.getElementById("username-input").value;
    user.password = document.getElementById("password-input").value;
    user.email = document.getElementById("email-input").value;
    var userJson = JSON.stringify(user);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState==4) {
            console.log("user added");
        }
    }

    xhr.open("POST", "http://localhost:8080/user/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(userJson);

}