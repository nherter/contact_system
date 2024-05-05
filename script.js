const dateipfad = 'src/contacts.json';
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

        saveInJson(inputBoxName.value, inputBoxAdress.value)
    }
    inputBoxName.value = "";
    inputBoxAdress.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

function saveInJson() {
    let liElements = {
        Name: inputBoxName.value,
        Adress: inputBoxAdress.value
    }
    let jsonStr = JSON.stringify(liElements)
    console.log(jsonStr)
};