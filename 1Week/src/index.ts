const btn = document.getElementById("button");
const text = document.getElementById("text");

btn?.addEventListener("click", function() {
  if(text !== null) {
    if(text.innerHTML === "") text.innerHTML = "Hello World!";
    else text.innerHTML = "";
  };
})