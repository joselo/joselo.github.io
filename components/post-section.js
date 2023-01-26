class PostSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const path = this.getAttribute("data-path");

    console.log('data-path', path);

    this.innerHTML += `<md-block src="${path}"></md-block>`;
  }
}

customElements.define('post-section', PostSection);
