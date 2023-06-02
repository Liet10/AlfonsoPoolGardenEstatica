window.addEventListener('DOMContentLoaded', ()=>{
    landingPages()
    showMenu()
    linksInPages()
})

function landingPages(){
    const divContainer = document.querySelector('.container')
    const header = createHome();

    divContainer.appendChild(header)
}
function createHome(){
       const headerText = createHeader('Esperalo muy pronto nuestra', ' web');
       return headerText;
}
function createHeader(textHeader, textSpan){
    const headerContainer = document.createElement('HEADER');
    headerContainer.classList.add('header-container');

    const linkElement = document.createElement('A')
    linkElement.setAttribute("href", "/index.html");


    const imgLogo = document.createElement('IMG');
    imgLogo.setAttribute("class","image-logo",);
    imgLogo.setAttribute('src', "/img/logo.jpg");
    imgLogo.setAttribute('alt', "logo/empresa");
    imgLogo.setAttribute('width', "150");
    imgLogo.setAttribute('height', "150");

    const h1Element = document.createElement('H1');
    h1Element.classList.add('title');
    h1Element.textContent = textHeader

    const spanElement = document.createElement('SPAN')
    spanElement.classList.add('spanTitle')
    spanElement.textContent = textSpan

    const menuElement = document.createElement('DIV');
    menuElement.classList.add('menu-icon')

    const imgMenuIcon = document.createElement('IMG');
    imgMenuIcon.setAttribute('src', '/img/menu-button_icon-icons.com_72989.ico')
    imgMenuIcon.setAttribute('alt', "logo/empresa");
    imgMenuIcon.setAttribute('width', "50");
    imgMenuIcon.setAttribute('height', "50");

    
    linkElement.appendChild(imgLogo);
    h1Element.appendChild(spanElement);
    menuElement.appendChild(imgMenuIcon);

    headerContainer.appendChild(linkElement);
    headerContainer.appendChild(h1Element);
    headerContainer.appendChild(menuElement);


    return headerContainer;
}

function showMenu(){
    
    const overlay = document.querySelector('.overlay')
    const iconMenu = document.querySelector('.menu-icon');
    let overlayActive = false;
    

    iconMenu.addEventListener('click', ()=>{
        if(!overlayActive){
            const closeText = document.createElement('P');        
            closeText.textContent = 'X';
            closeText.classList.add('closeText');
            overlay.classList.add('overlay-fixed');
            overlayActive = true
            
            overlay.appendChild(createMenu());
            overlay.appendChild(closeText)
            
            closeText.addEventListener('click', ()=>{
                overlay.innerHTML = '';
                overlay.classList.remove('overlay-fixed');
                overlayActive = false
    
    
            })
        }
        
           
    });
    
}
function createMenu(){
    // Crear el elemento <ul>
const ulElement = document.createElement('UL');
ulElement.classList.add('menu-list');

// Crear los elementos <li> y añadir contenido
const homeLi = document.createElement('LI');
homeLi.textContent = 'Home';
homeLi.classList.add('menuText');
homeLi.setAttribute('id', 'home');


var nosotrosLi = document.createElement('LI');
nosotrosLi.textContent = 'Nosotros';
nosotrosLi.classList.add('menuText');
nosotrosLi.setAttribute('id', 'nosotros');



var contactoLi = document.createElement('LI');
contactoLi.textContent = 'Contacto';
contactoLi.classList.add('menuText');
contactoLi.setAttribute('id', 'contacto')



// Agregar los elementos <li> al elemento <ul>
ulElement.appendChild(homeLi);
ulElement.appendChild(nosotrosLi);
ulElement.appendChild(contactoLi);
 
return ulElement;
}

function linksInPages() {
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


