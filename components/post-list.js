class PostList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    posts.forEach(post => this.innerHTML +=
      `
      <post-card
        data-title="${post.title}"
        data-date="${post.date}"
        data-friendly-id="${post.friendlyId}">
      </post-card>
      `
    );
  }
}

customElements.define('post-list', PostList);
