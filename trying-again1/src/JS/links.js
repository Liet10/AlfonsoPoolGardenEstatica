export default function linksInPages() {
    const waitForElement = () => {
      return new Promise((resolve) => {
        const checkElement = () => {
          const home = document.getElementById("home");
          const nosotros = document.getElementById("nosotros");
          const contacto = document.getElementById("contacto");

          if (home && nosotros && contacto) {
            resolve({home, nosotros, contacto});
          } else {
            setTimeout(checkElement, 100); // Intenta nuevamente después de 100ms
          }
        };
        checkElement();
      });
    };
  
    waitForElement().then(({home, nosotros, contacto}) => {
      home.addEventListener('click', () => {
        window.location.href = '/index.html';
      });
      nosotros.addEventListener("click", () => {
        const nosotrosPageUrl = "/src/pages/nosotros.html";
        window.location.href = nosotrosPageUrl;
      });
    contacto.addEventListener('click', () => {
      const nosotrosPageUrl = "/src/pages/contacto.html";
      window.location.href = nosotrosPageUrl;
  });
});
}