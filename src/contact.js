/**
 * Este script maneja la lógica del formulario de contacto.
 * Captura los datos introducidos por el usuario, verifica que no estén vacíos
 * y muestra un mensaje de confirmación o error al enviar el formulario.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el formulario de contacto
    const contactForm = document.getElementById('contactForm');

    // Evento de envío del formulario
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página al enviar el formulario

        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Verificar si los campos no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            // Si todo está bien, mostrar un mensaje de éxito y resetear el formulario
            alert(`¡Gracias por tu mensaje, ${name}!`);
            contactForm.reset(); // Resetear el formulario después del envío
        } else {
            // Si faltan datos, mostrar un mensaje de error
            alert('Por favor, completa todos los campos.');
        }
    });
});
