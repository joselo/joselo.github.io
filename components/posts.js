class Posts extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    posts.forEach(post => this.innerHTML += `<md-block src="${post}"></md-block>`);
  }
}

customElements.define('posts-component', Posts);
