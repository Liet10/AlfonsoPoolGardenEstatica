

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
        
        overlay.addEventListener('click', ()=>{
            
            overlay.remove()
            return;
        })
           
    });
    
}function createMenu(){
    // Crear el elemento <ul>
const ulElement = document.createElement('UL');
ulElement.classList.add('menu-list');

// Crear los elementos <li> y añadir contenido
const homeLi = document.createElement('LI');
homeLi.textContent = 'Home';

var nosotrosLi = document.createElement('LI');
nosotrosLi.textContent = 'Nosotros';

var contactoLi = document.createElement('LI');
contactoLi.textContent = 'Contacto';

// Agregar los elementos <li> al elemento <ul>
ulElement.appendChild(homeLi);
ulElement.appendChild(nosotrosLi);
ulElement.appendChild(contactoLi);
 
return ulElement;
}



