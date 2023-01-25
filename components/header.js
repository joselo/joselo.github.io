class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="border-gray-200 py-2.5 p-4 lg:p-8">
          <div class="container mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <a href="#" class="font-bold text-xl">joselo</a>

              <button class="border border-solid border-gray-600 p-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i class="material-icons">menu</i>
              </button>
            </div>

            <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
              <a href="#" class="p-2 lg:px-4 md:mx-2 rounded primary-link">Home</a>
              <a href="#" class="p-2 lg:px-4 md:mx-2 rounded primary-link">About</a>
            </div>
          </div>
        </nav>
      </header>
    `;
  }

  listen(el) {
    el.addEventListener('click', function() {
      let collapse = document.querySelector("#navbar-collapse");

      collapse.classList.toggle("hidden");
      collapse.classList.toggle("flex");
    });
  }
}

customElements.define('header-component', Header);
document.querySelector('header-component').listen(document.querySelector('#navbar-toggle'));
