const main = document.getElementById("main");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('p')

if (id) {
  const post = posts.find(post => post.friendlyId === id);

  main.innerHTML = `<post-section data-path="${post.path}"></post-section>`;
} else {
  main.innerHTML = `Vacío como tu alma`;
}
