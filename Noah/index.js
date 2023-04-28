function toonTabel(deData){
    console.log(deData)
    document.getElementById("book-list").innerHTML = ""
    for(var x = 0; x < deData.length; x++){
        document.getElementById("book-list").innerHTML += `<div>Ons boek: ${deData[x].title}</div>`
    }
}

function bookSave() {

    var book = {};
    book.title = document.getElementById("book-title").value;
    book.isbn = document.getElementById("isbn").value;
    var bookJson = JSON.stringify(book);
    var xhr = new XMLHttpRequest(); 

    xhr.onreadystatechange = function() {
        if (this.readyState==4) {
            console.log("book added");
        }
    }

    xhr.open("POST", "http://localhost:8080/book/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(bookJson);

}