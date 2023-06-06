export default function validateForm() {
    const contactPageUrl = "/src/pages/contacto.html"; 

    if (window.location.href.includes(contactPageUrl)) {
      const form = document.getElementById("form_contacto");
      onlyNumber();
    // const form = document.getElementById("form_contacto");

    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        const inputName = document.getElementById("name").value;
        const inputMail = document.getElementById("email").value;
        // const inputPhone = document.getElementById("phone").value
      
        if (inputName === '' || inputMail === '') {  
                const textError = 'Los campos nombre, correo son requeridos';
                const errorElement = document.createElement('P');
                errorElement.classList.add('error_element');
                errorElement.textContent = textError;
                form.appendChild(errorElement);
                 setTimeout(()=>{
                    errorElement.remove()
                    form.reset();
                 },5000)          
        } else {
              form.action = "https://formsubmit.co/alberto.aless2016@gmail.com";
              form.method = "POST";
              form.submit();

        }
      });
}

function onlyNumber() {
    const inputPhone = document.getElementById("phone");

    inputPhone.addEventListener("keydown", function(event) {
       
        if ((event.key < "0" || event.key > "9") && event.key !== " " && event.key !== "Backspace") {
            event.preventDefault();
        }
    });  

}
}







