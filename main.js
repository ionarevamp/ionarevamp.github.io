function addDiv(id: string, text: string) {
  const parentElement = document.getElementById(id);
  const newElement = document.createElement("div");
  newElement.textContent = text;

  parentElement.appendChild(newElement);
}

//current_doc = document.body.innerHTML;
//document.body.innerHTML = current_doc + "HELLO!"
addDiv("test", "HELLO!");
