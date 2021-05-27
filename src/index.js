  //querySelectors
let dogTable = document.querySelector('#dog-table')
let dogForm = document.querySelector('#dog-form')
// Fetch Requests

fetch('http://localhost:3000/dogs')
.then(resp => resp.json())
.then(data => appendDogDataToTable(data))

//Manipulate Data
function appendDogDataToTable(dogs){
    dogs.forEach(function(dog){
        let tr = document.createElement("tr");   
        tr.innerHTML =
       ` <tr>
            <td>${dog.name}</td>
            <td>${dog.breed}<td>
            <td>${dog.sex}</td>
            <td><button data-id=${dog.id}>Edit</button></td>
        </tr>`
        dogTable.append(tr);
    })
    
}