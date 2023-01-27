class PostCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("data-title");
    const date = this.getAttribute("data-date");
    const friendlyId = this.getAttribute("data-friendly-id");

    this.innerHTML = `
      <div class="mb-5">
        <a href="/p.html?p=${friendlyId}" class="link">${title}</a>
        <div>${date}</div>
      </div>
    `;
  }
}

customElements.define('post-card', PostCard);
