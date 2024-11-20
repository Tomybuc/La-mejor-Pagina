    // Verifica si el navegador soporta SpeechSynthesis
    if ('speechSynthesis' in window) {
        let isNarratorActive = true; // Variable para controlar si el narrador está activo
  
        // Función para leer texto
        const speakText = (text) => {
          if (isNarratorActive) { // Solo lee si el narrador está activo
            speechSynthesis.cancel(); // Detiene cualquier narración en curso
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-ES'; // Configura el idioma a español
            utterance.rate = 1; // Velocidad normal
            speechSynthesis.speak(utterance);
          }
        };
        
  
        // Mensaje de bienvenida al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
          speakText('Bienvenido a la página. Pasa el cursor sobre cualquier texto para escucharlo. Si desea desactivar el narrador aprete control + F');
        });
  
        // Leer texto al pasar el cursor
        document.body.addEventListener('mouseover', (event) => {
          const element = event.target; // Elemento bajo el cursor
          if (isNarratorActive && (element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'H5' || element.tagName === 'H2' || element.tagName === 'BUTTON')) {
            const text = element.innerText; // Captura el texto del elemento
            speakText(text);
          }
        });
  
        // Función para activar/desactivar el narrador
        const toggleNarrator = (event) => {
          // Verifica si la combinación de teclas Ctrl + F está presionada
          if (event.ctrlKey && event.key === 'f') {
            isNarratorActive = !isNarratorActive; // Cambia el estado del narrador
            if (isNarratorActive) {
              speakText('El narrador está ahora activado.');
            } else {
              speechSynthesis.cancel(); // Detiene la narración si el narrador se desactiva
              alert('El narrador ha sido desactivado.');
            }
          }
        };
  
        // Escucha la combinación de teclas para activar/desactivar el narrador
        document.addEventListener('keydown', toggleNarrator);
      } else {
        alert('Tu navegador no soporta la funcionalidad de texto a voz.');
      }