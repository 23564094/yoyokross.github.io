var uri = document.getElementById("uri");
var counter = 10;

setInterval(function() {
  counter--;

  if (counter >= 0) {
    span = document.getElementById("counter");
    span.innerHTML = counter;
  }

  // Display 'counter' wherever you want to display it.
  if (counter === 0) {
    //    alert('this is where it happens');
    clearInterval(counter);
  }
}, 1000);

window.setTimeout(function() {
  // Move to a new location
  window.location.href = uri.href;
}, 10000);
