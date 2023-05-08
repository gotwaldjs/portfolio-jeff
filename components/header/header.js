// Fetch the header HTML code from the external file
const xhr = new XMLHttpRequest();
xhr.open('GET', 'header.html');
xhr.onload = function() {
  if (xhr.status === 200) {
    // Insert the header code into the placeholder element
    document.querySelector('#header-placeholder').innerHTML = xhr.responseText;
  }
};
xhr.send();
