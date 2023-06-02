

 export default function showMenu(){
    
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



