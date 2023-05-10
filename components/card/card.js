class Card extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root for the custom element
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Fetch the card HTML code from the external file
      const xhr = new XMLHttpRequest();
      xhr.open('GET', './components/card/card.html');
      xhr.onload = function () {
        if (xhr.status === 200) {
          // Insert the card code into the shadow root
          shadowRoot.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
  
      // Get the card attributes
      const imageSrc = this.getAttribute('image-src');
      const title = this.getAttribute('title');
      const description = this.getAttribute('description');
      const ctaLink = this.getAttribute('cta-link');
      const backgroundColor = this.getAttribute('background-color') || '#FFFFFF';
      const tagType = this.getAttribute('tag-type');
      const tagLabel = this.getAttribute('tag-label');
  
      // Create the card HTML structure
      const cardContainer = shadowRoot.querySelector('.card');
      cardContainer.style.backgroundColor = backgroundColor;
  
      const cardImage = shadowRoot.querySelector('.card__image');
      cardImage.src = imageSrc;
  
      const cardDescriptionText = shadowRoot.querySelector('.card__description');
      cardDescriptionText.textContent = description;
  
      const cardFooter = shadowRoot.querySelector('#card__footer');
      const cardTag = cardFooter.querySelector('carbon-tag');
      cardTag.setAttribute('type', tagType);
      cardTag.textContent = tagLabel;
  
      // Create a link to the CTA
      const cardLink = shadowRoot.querySelector('.card__link');
      cardLink.href = ctaLink;
  
      // Add the CSS styles to the shadow root
      const style = document.createElement('style');
      style.textContent = `
        /* Add your CSS styles here */
      `;
      shadowRoot.appendChild(style);
    }
  }
  
  // Define the custom element for the Card component
  customElements.define('my-card', Card);
  