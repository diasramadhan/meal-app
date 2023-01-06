class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="myBg py-5">
      <div class="container">
        <div class="col-md-6">
          <h1 class="title text-primary animate__animated animate__backInLeft">
            Makan Enak <br />Adalah Kebutuhan
          </h1>
          <p class="description animate__animated animate__backInRight">
            warex adalah sebuah website penyedia resep-resep makanan yang dapat anda akses secara
            gratis, dapat anda gunakan sebagai alternatif referensi menu masakan anda.
          </p>
          <a href="#product">
            <button
              type="button"
              class="btn btn-primary myBtn mt-5 animate__animated animate__backInLeft"
            >
              Cobain Sekarang
            </button>
          </a>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
