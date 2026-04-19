const element = document.getElementById("level");

let count = 0;
let current = element;

// Traverse up the DOM tree
while (current) {
  count++;
  current = current.parentElement;
}

// Show result
alert("The level of the element is: " + count);