class FooterApp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
      footer {
        padding: 3rem;
        background-color: black;
      }
      .f-column {
        display: flex;
        flex-direction: column;
      }
      .f-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .f-column .f-row > div {
        flex: 1;
        padding: 0 5%;
      }

      .f-column .f-row a {
        display: block;
        text-decoration: none;
        color: #6e6e6e;
        padding: 0.5rem 0;
      }

      .f-column .f-row a:hover {
        color: white;
      }

      .f-column .f-row h2 {
        color: white;
      }

      .f-column .f-row p {
        color: white;
      }

      .copy-right {
        display: flex;
        justify-content: center;
        padding-top: 3rem;
      }
      .copy-right span {
        color: red;
      }

      .navigation {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-top: 1rem;
      }
      .follow-me,
      .about-us,
      .support {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      @media only screen and (max-width: 576px) {
        .f-column .f-row > div {
          flex-basis: 100%;
        }
      }
      @media only screen and (min-width: 576px) {
        .f-column .f-row > div {
          flex-basis: 30%;
        }
      }
      @media only screen and (min-width: 768px) {
        .f-column .f-row > div {
          flex-basis: 0%;
        }
      }
    </style>

    <footer>
      <div class="f-column">
        <div class="f-row">
          <div class="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Help</a>
          </div>
          <div class="follow-me">
            <h2>Follow Me</h2>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
          <div class="about-us">
            <h2>About Us</h2>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
            <a href="#">Q & A</a>
          </div>
          <div class="support">
            <h2>Support</h2>
            <a href="#">Getting Started</a>
            <a href="#">Help Center</a>
          </div>
        </div>

        <div class="f-row copy-right">
          <p class="">Copyright © 2022, Built With <span>❤</span> by Dias Nur Ramadhan</p>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);
