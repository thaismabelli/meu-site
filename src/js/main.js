// JavaScript que pode ser utilizado para adicionar interatividade ao site web criado 

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Mensagem enviada com sucesso!');
                contactForm.reset();
            } else {
                alert('Preencha todos os campos. =D');
            }
        });
    }
});