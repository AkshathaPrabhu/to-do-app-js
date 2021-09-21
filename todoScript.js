// adding a X to every list element
function displayCross() {
  var span = document.createElement("SPAN");
  var crossIcon = document.createTextNode("\u00D7");

  span.className = "cross";
  span.appendChild(crossIcon);
  return span;

}


function myFunction() {
  var inputValue = document.getElementById("inputbar").value;
  console.log(inputValue);
  if (inputValue === null || inputValue === "" || inputValue === " ") {
    alert("Oops! I didn't get that. Please enter again");
    return;
  }

  document.getElementById("inputbar").value = "";
  var list = document.createElement("li"); // Create a <li> node
  var listElement = document.createTextNode(inputValue)
  list.appendChild(listElement); // Append the text to <li>
  list.appendChild(displayCross()); //append span to 

  // <ul> <li>
  document.getElementById("ToDoList").appendChild(list);



  /* delete list element on clicking X */
  deleteListEleOnCross();


}


function deleteListEleOnCross() {
  console.log("hieeled")
  var closebtns = document.getElementsByClassName("cross");
  var i;
  /* Loop through the elements, and hide the parent, when clicked on */
  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
      this.parentElement.style.display = 'none';
    });
  }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);