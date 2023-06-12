export default function MainContainer() {
  
  const isHomePage = document.body.classList.contains('home-page'); // Actualiza esto con la ruta de tu página de inicio

  if (!isHomePage) {
    return; 
  }


  if (!isHomePage) {
    return; 
  }
    const mainSection = document.querySelector('.main-container');
    // Sección 1
    const section1 = createSection('src/img/imgHome/jardin.jpg', 'img/rosasblancas', 'Corte y mantenimiento del césped de manera regular con la mejor maquinaria. Mantenimiento de sistemas de riegos automáticos o manuales garantizando un suministro óptimo de agua a las plantas, dependiendo de la estación del año. Control de plagas y malas hierbas con el mínimo impacto al medio ambiente. Apoyo en el diseño de los jardines y espacios verdes (Plantar, replantar, repoblar etc...). Eliminación y recolección de residuos verdes una vez terminado el trabajo.', '¿Presupuestos jardines?');
    
    mainSection.appendChild(section1);
  
    // Sección 2
    const section2 = createSection('src/img/imgHome/piscina.jpg', 'img/piscinas', 'Limpieza regular de paredes y fondo de la piscina, eliminación de hojas y ramas flotantes, limpieza de los skimmers y flitros, eliminación de algas. Mantenimiento del equilibrio químico del agua (Cloro, PH, Cloro Libre y Ácido isocianúrico), propuesta de sistemas de desinfección avanzados. Mantenimiento de los sistemas de filtración, limpieza de filtros y célula de cloradores salinos. Mantenimiento de equipos. Reeparaciones y renovaciones; alumbrado, fugas, problemas de tuberías, daños del sistema de filtración.', '¿Cloro, ph o sal en su puerta?');
    mainSection.appendChild(section2);
  
    // Sección 3
    const section3 = createSection('src/img/imgHome/comunidades.jpg', 'img/comunidades', 'Limpiezas de áreas comunes (pasillos, escaleras, ascensores, áreas de recreación y salas comunitarias), Mantenimiento de jardines y piscinas con mas de 3 años de experiencia en estos servicios. Apoyo en la instalación de sistemas de seguridad (llavines y cerraduras)servicios de fontanería y electricidad así como servicios de reparaciones generales: reparaciones de carpintería, pintura, albañilería, entre otros y mucho más!!!.', '¿Nos necesita en su comunidad u Hogar?');
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