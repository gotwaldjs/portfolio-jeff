class Card extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root for the custom element
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Get the card attributes
      const imageSrc = this.getAttribute('image-src');
      const title = this.getAttribute('title');
      const description = this.getAttribute('description');
      const ctaLink = this.getAttribute('cta-link');
      const backgroundColor = this.getAttribute('background-color') || '#FFFFFF';
      const tagType = this.getAttribute('tag-type');
      const tagLabel = this.getAttribute('tag-label');
  
      // Create the card HTML structure
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card');
      cardContainer.style.backgroundColor = backgroundColor;
  
      const cardImage = document.createElement('img');
      cardImage.src = imageSrc;
      cardImage.alt = '';
      cardImage.classList.add('card__image');
      cardContainer.appendChild(cardImage);
  
      const cardDescription = document.createElement('div');
      cardDescription.classList.add('addBorderBottom');
      const cardDescriptionText = document.createElement('p');
      cardDescriptionText.classList.add('card__description');
      cardDescriptionText.textContent = description;
      cardDescription.appendChild(cardDescriptionText);
      cardContainer.appendChild(cardDescription);
  
      const cardFooter = document.createElement('div');
      cardFooter.id = 'card__footer';
      cardFooter.style.display = 'flex';

      



      cardFooter.style.justifyContent = 'space-between';
      const cardTag = document.createElement('carbon-tag');
      cardTag.setAttribute('size', 'sm');
      cardTag.setAttribute('type', tagType);
      cardTag.title = 'Clear Filter';
      cardTag.textContent = tagLabel;
      cardFooter.appendChild(cardTag);
      cardContainer.appendChild(cardFooter);
  
      // Create a link to the CTA
      const cardLink = document.createElement('a');
      cardLink.href = ctaLink;
      cardLink.style.display = 'block';
      cardLink.style.height = '100%';
      cardLink.style.width = '100%';
      cardContainer.appendChild(cardLink);
  
      // Attach the card HTML structure to the shadow root
      shadowRoot.appendChild(cardContainer);
  
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
  