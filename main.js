function addDiv(id, text) {
  const parentElement = document.getElementById(id);
  const newElement = document.createElement("div");
  newElement.textContent = text;

  parentElement.appendChild(newElement);
}
function setTextById(id, text) {
  const parentElement = document.getElementById(id);
  parentElement.textContent = text;
}

//current_doc = document.body.innerHTML;
//document.body.innerHTML = current_doc + "HELLO!"
addDiv("test", "HELLO!?");

var i = 0;
while (i < 1000000) {
  setTextById("test", i);
  addDiv("output", i-1);
  i += 1;
}
