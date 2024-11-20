// cognitivo.html
const translations = {
    es: {
        video: "VIDEOS",
        recursos: "RECURSOS",
        titulo : "Consejos para personas con problemas de Cognitivo",
        consejo1: "Usar un lenguaje simple y claro",
        desc1: "Escribe contenido usando frases cortas y un vocabulario sencillo. Evita términos técnicos o complicados a menos que sean esenciales, y define cualquier concepto difícil.",
        consejo2 : "Organizar la información con jerarquías",
        desc2: "Usa encabezados, listas y bloques de texto bien separados. Esto ayuda a dividir el contenido en partes manejables, facilitando su comprensión.",
        consejo3 : "Utilizar ayudas visuales",
        desc3: "Complementa el texto con imágenes, íconos y diagramas relacionados. Esto refuerza el mensaje y facilita la retención de información.",
        consejo4 : "Evitar distracciones visuales",
        desc4: "Reduce el uso de animaciones, fondos complejos o elementos que cambien rápidamente. Mantén un diseño limpio y enfocado para minimizar la sobrecarga cognitiva.",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nosotros",
        infoNosotros: "Somos estudiantes de la orientación de Informática del Martín Zapata...",
        redes: "Redes sociales",
        derechos: "Copyright © 2024 Todos los derechos reservados."
    },
    en: {
        video: "VIDEOS",
        recursos: "RESOURCES",
        titulo : "Tips for people with cognitive problems",
        consejo1: "Use simple and clear language",
        desc1: "Write content using short sentences and simple vocabulary. Avoid technical or complicated terms unless they are essential, and define any difficult concepts.",
        consejo2 : "Organize information with hierarchies",
        desc2: "Use headings, lists, and well-spaced blocks of text. This helps break up content into manageable chunks, making it easier to understand.",
        consejo3 : "Use visual aids",
        desc3: "Complement the text with related images, icons and diagrams. This reinforces the message and makes it easier to retain information.",
        consejo4 : "Avoid visual distractions",
        desc4: "Reduce the use of animations, complex backgrounds, or rapidly changing elements. Keep the design clean and focused to minimize cognitive overload.",
        logodesc: "WEB FOR ALL",
        nosotros: "About us",
        infoNosotros: "We are students from the IT orientation of Martín Zapata...",
        redes: "Social networks",
        derechos: "Copyright © 2024 All rights reserved."
    },
    pt:{
        video: "VÍDEOS",
        recursos: "RECURSOS",
        titulo : "Dicas para pessoas com problemas cognitivos",
        consejo1: "Use uma linguagem simples e clara",
        desc1: "Escreva conteúdo usando frases curtas e vocabulário simples. Evite termos técnicos ou complicados, a menos que sejam essenciais, e defina quaisquer conceitos difíceis.",
        consejo2 : "Organize informações com hierarquias",
        desc2: "Use títulos, listas e blocos de texto bem separados. Isso ajuda a dividir o conteúdo em partes gerenciáveis, facilitando a compreensão.",
        consejo3 : "Use recursos visuais",
        desc3: "Complemente o texto com imagens, ícones e diagramas relacionados. Isso reforça a mensagem e facilita a retenção de informações.",
        consejo4 : "Evite distrações visuais",
        desc4: "Reduza o uso de animações, fundos complexos ou elementos que mudam rapidamente. Mantenha um design limpo e focado para minimizar a sobrecarga cognitiva.",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nós",
        infoNosotros: "Somos alunos da orientação Ciência da Computação de Martín Zapata...",
        redes: "Redes Sociais",
        derechos: "Copyright © 2024 Todos os direitos reservados."

    },
    ja:{
        
        video: "動画",
        recursos:"リソース",
        titulo : "聴覚に問題がある人へのヒント",
        consejo1: "動画で字幕を使用する",
        desc1: "すべてのビデオに正確で同期した字幕があることを確認してください。これにより、難聴のある人が視聴覚コンテンツを効果的に理解できるようになります。",
        consejo2 : "音声トランスクリプトを含める",
        desc2: "オーディオまたはポッドキャストの完全なトランスクリプトを提供します。これにより、情報をアクセス可能なテキスト形式で利用できるようになります。",
        consejo3 : "ビジュアルコミュニケーションを提供する",
        desc3: "ビデオではグラフィック、アイコン、手話などの視覚要素を使用します。これにより、聴覚障害を持つ人々に対するメッセージの理解が強化されます。",
        consejo4 : "視覚的なアラートを実装する",
        desc4: "音声信号 (アラームや通知など) を、ライトの点滅や明確なポップアップ メッセージなどの視覚的な警告に置き換えるか補足します。",
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