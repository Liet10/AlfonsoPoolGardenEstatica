

 export default function showMenu(){
    
    const overlay = document.querySelector('.overlay')
    const iconMenu = document.querySelector('.menu-icon');
    

    iconMenu.addEventListener('click', ()=>{
        const closeText = document.createElement('P');        
        closeText.textContent = 'X';
        closeText.classList.add('closeText');
        overlay.classList.add('overlay-fixed');
        // textmenu.style.display = 'block';
        
        overlay.appendChild(createMenu());
        overlay.appendChild(closeText)
        
        closeText.addEventListener('click', ()=>{
            overlay.innerHTML = '';
            overlay.classList.remove('overlay-fixed');
            


        })
           
    });
    
}function createMenu(){
    // Crear el elemento <ul>
const ulElement = document.createElement('UL');
ulElement.classList.add('menu-list');

// Crear los elementos <li> y añadir contenido
const homeLi = document.createElement('LI');
homeLi.textContent = 'Home';
homeLi.classList.add('menuText');

var nosotrosLi = document.createElement('LI');
nosotrosLi.textContent = 'Nosotros';
nosotrosLi.classList.add('menuText');


var contactoLi = document.createElement('LI');
contactoLi.textContent = 'Contacto';
contactoLi.classList.add('menuText');


// Agregar los elementos <li> al elemento <ul>
ulElement.appendChild(homeLi);
ulElement.appendChild(nosotrosLi);
ulElement.appendChild(contactoLi);
 
return ulElement;
}



