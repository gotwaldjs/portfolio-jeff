fetch('./components/header/header.html')
  .then(response => response.text())
  .then(data => {
    // Insert the header code into the placeholder element
    document.querySelector('#header-placeholder').innerHTML = data;
  });
