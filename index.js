// const form = document.querySelector('form')

// const { useFakeServer } = require("sinon")

// form.addEventListener('submit', e => {
//     e.preventDefault()

//     configurationObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             "dogName": dogName.value,
//             "dogBreed": dogBreed.value,
//         })
//     }

//     fetch('http://localhost:3000/dogs', configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     })
// })

// window.addEventListener("DOMContentLoaded", e => {

// })

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
            headers: {
            "Content-type": "application/json",
                "Accept": "application/json"
        },
        body: JSON.stringify({
            name, email
        })
    })
    .then(response => response.json())
    .then(object => {
        document.body.innerHTML = object["id"]
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}