export default function validateForm() {
    const form = document.getElementById("form_contacto");
    const button = document.getElementById("button_sumbmit");

    validatePhone();

    button.addEventListener('click', () => {        
            form.setAttribute('action', "https://formsubmit.co/algonsopj1962@gmail.com");
            form.setAttribute('method', "POST");
            form.submit();
        
    });
}

function validatePhone() {
    const inputPhone = document.getElementById("phone");

    inputPhone.addEventListener("keydown", function(event) {
       
        if ((event.key < "0" || event.key > "9") && event.key !== " " && event.key !== "Backspace") {
            event.preventDefault();
        }
    });

}








