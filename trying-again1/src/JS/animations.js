export default function Animations(){
    clickImage('/src/img/imgHome/rosasBlancas.webp');
    clickImage('/src/img/imgHome/piscina.webp');
    clickImage('/src/img/imgHome/comunidades.webp');

}
function clickImage(imagePath) {
    const overlay = document.querySelector('.overlay');
    let overlayActive = false;
  
    const images = document.querySelectorAll('.img-jardin');
    images.forEach((img) => {
      img.addEventListener('click', () => {
        if (!overlayActive) {
          const closeText = document.createElement('P');
          closeText.textContent = 'X';
          closeText.classList.add('closeText');
          overlay.classList.add('overlay-fixed');
          overlayActive = true;
  
          overlay.appendChild(imgOverlay((img.getAttribute('src'))));
          overlay.appendChild(closeText);
  
          closeText.addEventListener('click', () => {
            overlay.innerHTML = '';
            overlay.classList.remove('overlay-fixed');
            overlayActive = false;
          });
        }
      });
    });
     function imgOverlay(imagePath){
        const imgOverlay = document.createElement('IMG');
        imgOverlay.setAttribute('src', imagePath)
        imgOverlay.classList.add('img-overlay')

        return imgOverlay;
     } 
}