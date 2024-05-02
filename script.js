const inputBoxName = document.getElementById("contact-name")
const inputBoxAdress = document.getElementById("contact-adress")
const listContainer = document.getElementById("contact-list")

function addContact() {
    if (inputBoxName.value === '' && inputBoxAdress.value === '') {
        alert("Please fill in a Name and an Adress!")
    }

    else if (inputBoxName.value === '') {
        alert("Please fill in a Name!")
    }

    else if (inputBoxAdress.value === '') {
        alert("Please fill in an Adress!")
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = 'Name: ' + inputBoxName.value + '<br>Adress: ' + inputBoxAdress.value;

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(span);
    }
    inputBoxName.value = "";
    inputBoxAdress.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

// somehow safe the data in a JSON file :: src/contacts.json

// saveInJson() {
//     let liElements = listContainer.querySelectorAll('li')
// }