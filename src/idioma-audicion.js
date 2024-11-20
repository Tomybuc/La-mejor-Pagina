// audicion.html
const translations = {
    es: {
        video: "VIDEOS",
        recursos: "RECURSOS",
        titulo : "Consejos para personas con problemas de Audición",
        consejo1: "Usar subtítulos en videos",
        desc1: "Asegúrate de que todos los videos tengan subtítulos precisos y sincronizados. Esto ayuda a las personas con pérdida auditiva a comprender el contenido audiovisual de manera efectiva.",
        consejo2 : "Incluir transcripciones de audio",
        desc2: "Proporciona transcripciones completas para audios o podcasts. Esto permite que la información esté disponible en un formato de texto accesible.",
        consejo3 : "Ofrecer comunicación visual",
        desc3: "Utiliza elementos visuales como gráficos, íconos y lenguaje de señas en videos. Esto refuerza la comprensión del mensaje para personas con discapacidad auditiva.",
        consejo4 : "Implementar alertas visuales",
        desc4: "Reemplaza o complementa las señales sonoras (como alarmas o notificaciones) con alertas visuales, como luces intermitentes o mensajes emergentes claros.",
        logodesc: "WEB PARA TODOS",
        nosotros: "Sobre nosotros",
        infoNosotros: "Somos estudiantes de la orientación de Informática del Martín Zapata...",
        redes: "Redes sociales",
        derechos: "Copyright © 2024 Todos los derechos reservados."
    },
    en: {
        video: "VIDEOS",
        recursos: "RESOURCES",
        titulo : "Tips for people with hearing problems",
        consejo1: "Using subtitles in videos",
        desc1: "Make sure all videos have accurate and synchronized subtitles. This helps people with hearing loss to understand audiovisual content effectively.",
        consejo2 : "Include audio transcripts",
        desc2: "Provides full transcripts for audio or podcasts. This allows information to be made available in an accessible text format.",
        consejo3 : "Offer visual communication",
        desc3: "Use visual elements such as graphics, icons and sign language in videos. This reinforces the understanding of the message for people with hearing impairments.",
        consejo4 : "Implement visual alerts",
        desc4: "Replace or supplement audible signals (such as alarms or notifications) with visual alerts, such as flashing lights or clear pop-up messages.",
        logodesc: "WEB FOR ALL",
        nosotros: "About us",
        infoNosotros: "We are students from the IT orientation of Martín Zapata...",
        redes: "Social networks",
        derechos: "Copyright © 2024 All rights reserved."
    },
    pt:{
        video: "VÍDEOS",
        recursos: "RECURSOS",
        titulo : "Dicas para pessoas com problemas auditivos",
        consejo1: "Use legendas em vídeos",
        desc1: "Certifique-se de que todos os vídeos tenham legendas precisas e sincronizadas. Isso ajuda as pessoas com perda auditiva a compreender o conteúdo audiovisual de maneira eficaz.",
        consejo2 : "Incluir transcrições de áudio",
        desc2: "Fornece transcrições completas de áudio ou podcasts. Isso permite que as informações estejam disponíveis em um formato de texto acessível.",
        consejo3 : "Ofereça comunicação visual",
        desc3: "Use elementos visuais como gráficos, ícones e linguagem de sinais em vídeos. Isso reforça a compreensão da mensagem para pessoas com deficiência auditiva.",
        consejo4 : "Implementar alertas visuais",
        desc4: "Substitua ou complemente sinais sonoros (como alarmes ou notificações) por alertas visuais, como luzes piscantes ou mensagens pop-up claras.",
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