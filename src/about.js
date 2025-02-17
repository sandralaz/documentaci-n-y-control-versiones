/**
 * Maneja la lógica de cambio de imagen al hacer clic.
 * Inicializa un conjunto de imágenes y cambia la imagen mostrada cada vez que se hace clic sobre la imagen actual.
 * 
 * @function mostrarFotos
 * @returns {void}
 */
document.addEventListener('DOMContentLoaded', mostrarFotos);

/**
 * Función que gestiona el cambio de imagen al hacer clic en la imagen mostrada.
 * Crea un elemento de imagen, lo añade al DOM, y cada vez que el usuario hace clic sobre la imagen,
 * se muestra la siguiente imagen del conjunto de imágenes de forma cíclica.
 * 
 * @event click
 * @param {Event} e - El evento de clic sobre la imagen.
 * @returns {void}
 */
function mostrarFotos() {
    // Array que contiene las rutas de las imágenes
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];
    let currentIndex = 0; // Índice de la imagen actual

    // Crear un elemento de imagen y añadirlo al DOM
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    document.querySelector('.content').appendChild(imageElement);

    // Evento para cambiar la imagen al hacer clic
    imageElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Incrementar índice y ciclar entre imágenes
        imageElement.src = images[currentIndex]; // Actualizar la imagen
    });
}

