// Datos de traducción
const translations = {
    es: [
        { title: "¿Qué es la accesibilidad Web?", description: "Este video te enseñará qué es la accesibilidad web." },
        { title: "Cómo hacer páginas web inclusivas", description: "Este video te explicará la mayoría de las prácticas de accesibilidad web para que puedas aplicarlas a tu página." },
        { title: "Un video completo", description: "Este video te explica con más detalles qué es la accesibilidad web y cómo aplicarlo a tu página." }
    ],
    en: [
        { title: "What is Web Accessibility?", description: "This video will teach you what web accessibility is." },
        { title: "How to Create Inclusive Web Pages", description: "This video explains most web accessibility practices so you can apply them to your page." },
        { title: "A Complete Video", description: "This video explains in more detail what web accessibility is and how to apply everything to your page." }
    ],
    pt: [
        { title: "O que é a acessibilidade na Web?", description: "Este vídeo ensinará o que é a acessibilidade na web." },
        { title: "Como criar páginas web inclusivas", description: "Este vídeo explica a maioria das práticas de acessibilidade na web para que você possa aplicá-las à sua página." },
        { title: "Um vídeo completo", description: "Este vídeo explica em mais detalhes o que é acessibilidade na web e como aplicá-la à sua página." }
    ],
    ja: [
        { title: "ウェブアクセシビリティとは？", description: "このビデオでは、ウェブアクセシビリティとは何かを説明します。" },
        { title: "包括的なウェブページを作成する方法", description: "このビデオでは、ウェブアクセシビリティの主な実践方法を説明し、それをページに適用する方法を教えます。" },
        { title: "完全なビデオ", description: "このビデオでは、ウェブアクセシビリティとは何か、すべてをページに適用する方法を詳しく説明します。" }
    ]
};

let currentIndex = 0; // Índice del video actual
let currentLanguage = 'es'; // Idioma predeterminado

// Referencias a los elementos del DOM
const videoTitle = document.querySelector(".video-header h2");
const videoDescription = document.querySelector(".video-header p");
const videoContainer = document.querySelector(".video-container");

// Botones de navegación
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Función para actualizar el contenido según el índice actual y el idioma
function updateContent(lang = currentLanguage) {
    const videoData = translations[lang];
    const { title, description } = videoData[currentIndex];
    videoTitle.textContent = title;
    videoDescription.textContent = description;

    const offset = -currentIndex * 100;
    videoContainer.style.transform = `translateX(${offset}%)`;
}

// Eventos de los botones
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + translations[currentLanguage].length) % translations[currentLanguage].length;
    updateContent();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % translations[currentLanguage].length;
    updateContent();
});

// Función para cambiar el idioma y actualizar los videos
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    updateContent();
});