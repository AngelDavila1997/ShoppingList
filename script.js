var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.classList.add("li-div");
	listDone();

	var delbut = document.createElement("button");
	delbut.appendChild(document.createTextNode("Delete"));
	delbut.setAttribute("class", "deletebtn");
	li.appendChild(delbut);

	removeItem();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listDone(){
	for(i=0; i<list.length; i++){
		list[i].addEventListener("click", toggleDone);
	}
}

function toggleDone(){
	this.classList.toggle("done"); //classList to remove, add, edit classes
}

function createDeleteButton(){
	var delbut = document.createElement("button");
	delbut.appendChild(document.createTextNode("Delete"));
	delbut.setAttribute("class", "deletebtn");
	list[i].appendChild(delbut);
}

function removeItem(){
	var a = document.querySelectorAll("li button");
	for(i=0; i<a.length; i++){
		a[i].addEventListener("click", removeElement)
	}
}

function removeElement(){
	for(i=0; i<list.length; i++){
		this.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
listDone();
for(i=0; i<list.length; i++){
	createDeleteButton();		
}
removeItem();