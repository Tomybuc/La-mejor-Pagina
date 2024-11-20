// visibilidad.html
const translations = {
    es: {
        video: "VIDEOS",
        recursos: "RECURSOS",
        titulo : "Consejos para personas con problemas de Visibilidad",
        consejo1: "Usar contraste de colores adecuado",
        desc1: "Asegúrate de que el texto y los elementos visuales tengan un contraste suficiente con el fondo. Utiliza herramientas como WCAG Contrast Checker para verificar el nivel de contraste.",
        consejo2 : "Permitir ajuste de tamaño de texto",
        desc2: "Diseña páginas web que permitan aumentar el tamaño de la fuente sin romper el diseño. Usa unidades relativas como em o rem y evita el texto en imágenes.",
        consejo3 : "Implementar soporte para lectores de pantalla",
        desc3: "Usa etiquetas semánticas correctas como <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> y <code>&lt;footer&gt;</code>. Asegúrate de incluir descripciones en imágenes con el atributo alt.",
        consejo4 : "Proporcionar modos de alto contraste",
        desc4: "Ofrece una opción para habilitar un modo de alto contraste con colores simples, como texto blanco sobre fondo negro.",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nosotros",
        infoNosotros: "Somos estudiantes de la orientación de Informática del Martín Zapata...",
        redes: "Redes sociales",
        derechos: "Copyright © 2024 Todos los derechos reservados."
    },
    en: {
        video: "VIDEOS",
        recursos: "RESOURCES",
        titulo : "Tips for people with visibility problems",
        consejo1: "Use appropriate color contrast",
        desc1: "Make sure that text and visual elements have sufficient contrast with the background. Use tools such as WCAG Contrast Checker to verify the level of contrast.",
        consejo2 : "Allow text size adjustment",
        desc2: "Design web pages that allow for increased font size without breaking the design. Use relative units such as em or rem and avoid text in images.",
        consejo3 : "Implement support for screen readers",
        desc3: "Use correct semantic tags such as header, main and footer. Make sure to include descriptions on images with the alt attribute.",
        consejo4 : "Provide high contrast modes",
        desc4: "Provides an option to enable a high contrast mode with simple colors, such as white text on a black background.",
        logodesc: "WEB FOR ALL",
        nosotros: "About us",
        infoNosotros: "We are students from the IT orientation of Martín Zapata...",
        redes: "Social networks",
        derechos: "Copyright © 2024 All rights reserved."
    },
    pt:{
        video: "VÍDEOS",
        recursos: "RECURSOS",
        titulo : "Dicas para pessoas com problemas de visibilidade",
        consejo1: "Use contraste de cores apropriado",
        desc1: "Certifique-se de que o texto e os elementos visuais tenham contraste suficiente com o fundo. Use ferramentas como o WCAG Contrast Checker para verificar o nível de contraste.",
        consejo2 : "Permitir ajuste do tamanho do texto",
        desc2: "Crie páginas da web que permitam aumentar o tamanho da fonte sem quebrar o design. Use unidades relativas como em ou rem e evite texto em imagens.",
        consejo3 : "Implementar suporte para leitores de tela",
        desc3: "Use tags semânticas corretas, como header, main e footer. Certifique-se de incluir descrições em imagens com o atributo alt.",
        consejo4 : "Fornece modos de alto contraste",
        desc4: "Oferece uma opção para habilitar um modo de alto contraste com cores simples, como texto branco em um fundo preto.",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nós",
        infoNosotros: "Somos alunos da orientação Ciência da Computação de Martín Zapata...",
        redes: "Redes Sociais",
        derechos: "Copyright © 2024 Todos os direitos reservados."

    },
    ja:{
        
        video: "動画",
        recursos:"リソース",
        titulo : "視力に問題のある人へのヒント",
        consejo1: "適切な色のコントラストを使用する",
        desc1: "テキストと視覚要素が背景と十分なコントラストを持っていることを確認します。WCAG コントラスト チェッカーなどのツールを使用して、コントラストのレベルを確認します。",
        consejo2 : "テキストサイズの調整を許可する",
        desc2: "デザインを崩さずにフォント サイズを大きくできる Web ページを設計します。em や rem などの相対単位を使用し、画像内のテキストは避けます。",
        consejo3: "スクリーンリーダーのサポートを実装する",
        desc3: "ヘッダー、メイン、フッターなどの正しいセマンティック タグを使用します。画像には必ず alt 属性を使用して説明を含めてください。",
        consejo4: "高コントラストモードを提供する",
        desc4: "黒い背景に白いテキストなど、単純な色で高コントラスト モードを有効にするオプションを提供します。",
        logodesc: "誰でも使えるウェブ",
        nosotros: "私たちについて",
        infoNosotros: "私たちはMartín Zapataのコンピュータサイエンスオリエンテーションの学生です...",
        redes: "ソーシャルネットワーク",
        derechos: "著作権 © 2024 全著作権所有。"
    }
};

function changeLanguage(lang) {
    const elements = {
        video: "video",
        recursos: "recursos",
        titulo : "titulo",
        consejo1: "consejo1",
        desc1: "desc1",
        consejo2 : "consejo2",
        desc2: "desc2",
        consejo3 : "consejo3",
        desc3: "desc3",
        consejo4 : "consejo4",
        desc4: "desc4",
        nosotros: "nosotros",
        infoNosotros: "info-nosotros",
        logodesc: "logo-desc",
        redes: "redes",
        derechos: "derechos"
    };

    for (const key in elements) {
        const elementId = elements[key];
        const text = translations[lang][key];
        if (document.getElementById(elementId)) {
            document.getElementById(elementId).innerText = text;
        }
    }
}