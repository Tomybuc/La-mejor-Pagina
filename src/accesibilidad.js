document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('accesibilidad-sidebar');
    const toggleButton = document.getElementById('accesibilidad-btn');
    const closeButton = document.getElementById('close-sidebar');
    const zoomLens = document.createElement('div');
    const body = document.body;

    let zoomEnabled = false;

    // Crear la lupa
    zoomLens.id = 'zoom-lens';
    document.body.appendChild(zoomLens);

    // Mostrar/Ocultar Sidebar
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Aumentar y Disminuir texto
    let fontSize = 100;
    const updateFontSize = () => {
        document.querySelectorAll('body *').forEach(el => {
            el.style.fontSize = `${fontSize}%`;
        });
    };

    document.getElementById('aumentar-texto').addEventListener('click', () => {
        fontSize += 10;
        updateFontSize();
    });

    document.getElementById('disminuir-texto').addEventListener('click', () => {
        fontSize = Math.max(fontSize - 10, 50);
        updateFontSize();
    });

    // Contraste Alto
    document.getElementById('contraste-alto').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Colores Simples
    document.getElementById('colores-simples').addEventListener('click', () => {
        document.body.classList.toggle('simplify-colors');
    });

    // Zoom funcional
    document.getElementById('zoom-cursor').addEventListener('click', () => {
        zoomEnabled = !zoomEnabled;

        if (zoomEnabled) {
            zoomLens.style.display = 'block';
            document.addEventListener('mousemove', moveLens);
            document.addEventListener('click', applyZoom);
        } else {
            zoomLens.style.display = 'none';
            document.removeEventListener('mousemove', moveLens);
            document.removeEventListener('click', applyZoom);
            body.style.transform = 'none'; // Reset zoom
        }
    });

    const moveLens = (e) => {
        const x = e.pageX - 75;
        const y = e.pageY - 75;
        zoomLens.style.left = `${x}px`;
        zoomLens.style.top = `${y}px`;
    };

    const applyZoom = (e) => {
        const { clientX, clientY } = e;
        body.style.transform = zoomEnabled ? 'scale(1.5)' : 'none';
        body.style.transformOrigin = `${clientX}px ${clientY}px`;
    };
});