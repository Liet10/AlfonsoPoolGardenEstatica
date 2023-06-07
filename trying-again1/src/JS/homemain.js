export default function MainContainer() {
  const isHomePage = document.body.classList.contains('home-page');
  
  if (!isHomePage) {
    return; 
  }
    const mainSection = document.querySelector('.main-container');
    // Sección 1
    const section1 = createSection('src/img/imgHome/rosasBlancas.webp', 'img/rosasblancas', 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan', '¿Presupuestos jardines?');
    
    mainSection.appendChild(section1);
  
    // Sección 2
    const section2 = createSection('src/img/imgHome/piscina.webp', 'img/piscinas', 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan', '¿Cloro, ph o sal en su puerta?');
    mainSection.appendChild(section2);
  
    // Sección 3
    const section3 = createSection('src/img/imgHome/comunidades.webp', 'img/comunidades', 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan', '¿Limpiezas?');
    mainSection.appendChild(section3);

  }
  
  function createSection(imageSrc, altText, sectionText, textlink) {
    const section = document.createElement('div');
    section.classList.add('homeSections')
  
    const img = document.createElement('img');
    img.setAttribute('src', imageSrc);
    img.setAttribute('alt', altText);
    img.classList.add('img-jardin');
    section.appendChild(img);
  
    const text = document.createElement('P');
    text.classList.add('text-jardin');
    text.textContent = sectionText;
    section.appendChild(text);

    const divLink = document.createElement('DIV')

    const titleLink = document.createElement('H2');
    titleLink.classList.add('title-link');
    titleLink.textContent = textlink;

    const link = document.createElement('A');
    link.textContent = 'Contáctanos';
    link.classList.add('button-home');
    link.setAttribute('href', '/src/pages/contacto.html')

    divLink.appendChild(titleLink);
    divLink.appendChild(link);
    section.appendChild(divLink);
  
    return section;
  }