window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // We bind the FormData object and the form element
    var FD  = new FormData(form);

    // We define what will happen if the data are successfully sent
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // We define what will happen in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oups! Something goes wrong.');
    });

    // We setup our request
    XHR.open("POST", "http://www.foosechek.org/script.php");

    // The data sent are the one the user provide in the form
    XHR.send(FD);
  }
 
  // We need to access the form element
  var form = document.getElementById("myForm");

  // to takeover its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
