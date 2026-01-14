// app.js

// Lista de cámaras en el sidebar
const cameras = document.querySelectorAll('.camera-item');
// Elemento del título en la vista principal
const mainTitle = document.querySelector('.viewer h2');
// Elemento del cuadro de video
const videoPlaceholder = document.querySelector('.video-placeholder');

cameras.forEach(camera => {
  camera.addEventListener('click', () => {
    // Quitar clase active de todas las cámaras
    cameras.forEach(cam => cam.classList.remove('active'));

    // Poner clase active en la cámara clickeada
    camera.classList.add('active');

    // Actualizar título
    mainTitle.textContent = 'Cámara: ' + camera.textContent;

    // Actualizar texto del cuadro de video
    videoPlaceholder.textContent = 'VIDEO: ' + camera.textContent;
  });
});
