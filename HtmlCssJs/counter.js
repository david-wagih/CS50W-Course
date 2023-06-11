if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

function count() {
  let counter = localStorage.getItem("counter");
  counter++;
  document.querySelector("h1").innerHTML = counter;
  localStorage.setItem("counter", counter);
}
// the addEventListener() method takes two arguments: the event type and the function to be executed when the event occurs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h1").innerHTML = localStorage.getItem("counter");
  document.querySelector("button").onclick = count;
  // call the count() function once every second
  // it is like a timer now
  // setInterval(count, 1000);
});
