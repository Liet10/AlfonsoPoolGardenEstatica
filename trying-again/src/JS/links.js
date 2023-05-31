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
        const currentPageUrl = window.location.href;
        const currentPagePath = currentPageUrl.substring(0, currentPageUrl.lastIndexOf("/") + 1);
        const nosotrosPageUrl = "/src/pages/nosotros.html";
        window.location.href = nosotrosPageUrl;
      });
    home.addEventListener('click', () => {
        window.location.href = '/index.html';
  });
});
}