import styles from './../css/main.css';


// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');

$(document).ready(function(){
  console.log('hello');
});

$("#contactform").submit(function(e) {
    e.preventDefault();    
    var formData = new FormData(this);
    console.log(formData);
    $.ajax({
        url: 'https://formspree.io/tim@cssandstuff.com',
        type: 'POST',
        data: formData,
        dataType: "json",
        success: function (data) {
            console.log(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });
});

// Nifty stuff to load pages asynchronously:
// https://albertarmea.com/post/async-load-hugo/
function loadPage(newUrl) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState !== XMLHttpRequest.DONE)
      return;

    
    var newDocument = httpRequest.responseXML;
    if (newDocument === null)
      return;

    
    var newContent = httpRequest.responseXML.getElementById("mainContent");
    var newNav = httpRequest.responseXML.getElementById("navMain");
    var newLanguage = httpRequest.responseXML.getElementById("languages");
    if (newContent === null)
      return;

    document.title = newDocument.title;

    var contentElement = document.getElementById("mainContent");
    var navElement = document.getElementById("navMain");
    var languagesElement = document.getElementById("languages");
    
    contentElement.replaceWith(newContent);
    navElement.replaceWith(newNav);
    languagesElement.replaceWith(newLanguage);
  }

  httpRequest.responseType = "document";
  httpRequest.open("GET", newUrl);
  httpRequest.send();
};

window.onload = function() {
  
  document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.tagName !== "A")
      return;

    
    if (history === null)
      return;

    
    var newUrl = event.target.href;
    var domain = window.location.origin;
    if (typeof domain !== "string" || newUrl.search(domain) !== 0) {
      event.preventDefault();
      window.open(newUrl, "_blank");
    } else {
      event.preventDefault();
      loadPage(newUrl);
      history.pushState(null  , ""  , newUrl);
    }
  });
}

window.onpopstate = function(event) {
  loadPage(window.location);
}