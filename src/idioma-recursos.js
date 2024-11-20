// recursos.html
const translations = {
    es: {
        video: "VIDEOS",
        recursos: "RECURSOS",
        titulo1: "Validadores de accesibilidad",
        desc1: "Utiliza herramientas que analizan tu sitio web y detectan problemas de accesibilidad,como errores en el contraste, etiquetas ARIA y navegación.",
        enlace1: "Usa la herramienta →",
        titulo2: "WCAG: Reglas de Accesibilidad.",
        desc2: "Aprende los estándares globales que guían la creación de contenido web accesible para todos.",
        enlace2: "Encuentra más →",
        titulo3: "Educación en Accesibilidad",
        desc3: "Aprende a diseñar y desarrollar sitios web inclusivos mediante cursos especializados.",
        enlace3: "Ingresa al Curso →",
        titulo4: "Plugins y librerías de Accesibilidad",
        desc4:"Agrega funcionalidades accesibles fácilmente usando plugins y librerías.",
        enlace4: "Acceda a la librería →",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nosotros",
        infoNosotros: "Somos estudiantes de la orientación de Informática del Martín Zapata...",
        redes: "Redes sociales",
        derechos: "Copyright © 2024 Todos los derechos reservados."
    },
    en: {
        video: "VIDEOS",
        recursos: "RESOURCES",
        titulo1: "Accessibility validators",
        desc1: "Use tools that analyze your website and detect accessibility issues, such as errors in contrast, ARIA tags, and navigation.",
        enlace1: "Use the tool →",
        titulo2: "WCAG: Accessibility Rules.",
        desc2: "Learn the global standards that guide the creation of accessible web content for everyone.",
        enlace2: "Find more →",
        titulo3: "Accessibility Education",
        desc3: "Learn to design and develop inclusive websites through specialized courses.",
        enlace3: "Enter the Course →",
        titulo4: "Accessibility plugins and libraries",
        desc4:"Add accessible functionality easily using plugins and libraries.",
        enlace4: "Access the library →",
        logodesc: "WEB FOR ALL",
        nosotros: "About us",
        infoNosotros: "We are students from the IT orientation of Martín Zapata...",
        redes: "Social networks",
        derechos: "Copyright © 2024 All rights reserved."
    },
    pt:{
        video: "VÍDEOS",
        recursos: "RECURSOS",
        titulo1: "Validadores de acessibilidade",
        desc1: "Utilize ferramentas que analisem seu site e detectem problemas de acessibilidade, como erros de contraste, tags ARIA e navegação.",
        enlace1: "Use a ferramenta →",
        titulo2: "WCAG: Regras de acessibilidade.",
        desc2: "Conheça os padrões globais que orientam a criação de conteúdo web acessível a todos.",
        enlace2: "Encontre mais →",
        titulo3: "Educação para acessibilidade",
        desc3: "Aprenda a projetar e desenvolver sites inclusivos através de cursos especializados.",
        enlace3: "Entre no curso →",
        titulo4: "Plug-ins e bibliotecas de acessibilidade",
        desc4:"Adicione funcionalidades facilmente acessíveis usando plug-ins e bibliotecas.",
        enlace4: "Acesse a livraria →",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nós",
        infoNosotros: "Somos alunos da orientação Ciência da Computação de Martín Zapata...",
        redes: "Redes Sociais",
        derechos: "Copyright © 2024 Todos os direitos reservados."

    },
    ja:{
        
        video: "動画",
        recursos:"リソース",
        titulo1: "アクセシビリティバリデーター",
        desc1: "Web サイトを分析し、コントラストエラー、ARIA タグ、ナビゲーションなどのアクセシビリティの問題を検出するツールを使用します。",
        enlace1: "ツールを使用する →",
        titulo2: "WCAG: アクセシビリティ ルール。",
        desc2: "誰もがアクセスできる Web コンテンツの作成をガイドする世界標準について学びます。",
        enlace2: "もっと探す →",
        titulo3: "アクセシビリティ教育",
        desc3: "専門コースを通じて包括的な Web サイトのデザインと開発を学びます。",
        enlace3: "コースに入る→",
        titulo4: "アクセシビリティのプラグインとライブラリ",
        desc4:"プラグインとライブラリを使用して、簡単にアクセスできる機能を追加します。",
        enlace4: "書店へのアクセス→",
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
        titulo1 : "titulo1",
        desc1: "desc1",
        enlace1: "enlace1",
        titulo2 : "titulo2",
        desc2: "desc2",
        enlace2: "enlace2",
        titulo3 : "titulo3",
        desc3: "desc3",
        enlace3: "enlace3",
        titulo4 : "titulo4",
        desc4: "desc4",
        enlace4: "enlace4",
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
