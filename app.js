let formx = document.getElementById("formx")
let myInput = document.getElementById("myInput")
let listItems = document.getElementById("listItems")

formx.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(myInput.value)
})

function createItem(x) {
  let myHTML = ` <li>${x}&nbsp;<button onClick="deleteItem(this)">Delete</button></li>`
  listItems.insertAdjacentHTML("beforeend", myHTML)
  myInput.value = ""
  myInput.focus()
}

function deleteItem(elementToBeDelete) {
  elementToBeDelete.parentElement.remove()
}