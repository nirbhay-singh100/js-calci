
function display(value){

  // document.getElementById("textArea").setAttribute("value",document.getElementById("textArea").getAttribute("value")+value);
  document.getElementById("textArea").value += value;
}

function calculate(){
  var value = document.getElementById("textArea").value;
  var solution = eval(value);
  document.getElementById("textArea").value = solution;
}

function clr(){
  document.getElementById("textArea").value = "";
}
