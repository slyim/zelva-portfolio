/**
 * i18n TRANSLATIONS
 * =================
 * All user-facing strings for English, German, and Turkish.
 */

export type Locale = 'en' | 'de' | 'tr'

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    'nav.artworks': 'Artworks',
    'nav.designs': 'Designs',
    'nav.creativeCoding': 'Creative Coding',
    'nav.photography': 'Photography',
    'nav.soundscapes': 'Soundscapes',

    // Hero
    'hero.tagline': 'S Class Designer ✦',
    'hero.greeting': "HI, I'M",
    'hero.contact': 'CONTACT',
    'hero.scrollTop': 'CHECK OUT',
    'hero.scrollMid': 'DOWN',
    'hero.scrollBtm': 'GO!',

    // About / Workflow
    'about.p1':
      "Hi, I'm Zelva, a creative designer who believes in the value of human work & intelligence. Capable of implementing human design solutions made for humans by me in the era of AI slop.",
    'about.p2':
      "I'm passionate about crafting experiences that feel natural, intuitive, and visually striking. Creativity is universal, and good design should work for everyone.",
    'about.p3':
      "You can't afford to replace a real professional with a tool that you have to babysit that doesn't know your brand & doesn't know human psychology. This is where real product designers shine.",
    'workflow.heading': 'NO LIMITS',
    'workflow.subtitle': 'PROFESSIONAL DESIGN WORKFLOW',
    'workflow.empathize': 'EMPATHIZE',
    'workflow.define': 'DEFINE',
    'workflow.ideate': 'IDEATE',
    'workflow.test': 'TEST',
    'workflow.prototype': 'PROTOTYPE',
    'workflow.ship': 'SHIP',

    // Tools
    'tools.heading': 'TOOLS I MAINLY USE',
    'tools.subtitle':
      'ps: I can use any tool, a tool does not specify anything, a tool is a tool. Simply one should be able to use them all, adobe, canva, zed, blender, after effects, davinci.... This is my favorites list.',

    // Education
    'education.heading': 'EDUCATION',
    'edu.certificates': 'CERTIFICATES',
    'edu.university': 'UNIVERSITY',
    'edu.freeThinker': 'FREE THINKER',
    'edu.languages': 'LANGUAGES',

    // Contact
    'contact.heading': 'CONTACT ME!',
    'contact.emailPlaceholder': 'email',
    'contact.namePlaceholder': 'Nickname/Name',
    'contact.messagePlaceholder': "__ let's work together! >///< ",
    'contact.sending': 'Sending...',
    'contact.sent': 'Sent Shoutout!',
    'contact.shoutout': 'Shoutout!',
    'contact.visualLine1': "Let's create something",
    'contact.visualLine2': 'amazing together.',

    // Footer
    'footer.legal': 'legal info',
    'footer.copyright': 'Copyrighted by Zelva',
    'footer.madeWith': 'Made with Opencode, Zed & Figma',
    'footer.transRights': 'Trans rights are human rights',

    // ScrollSpy
    'spy.cta': 'CTA',
    'spy.about': 'About',
    'spy.skills': 'Skills',
    'spy.education': 'Education',
    'spy.contact': 'Contact me',
  },

  de: {
    // Navbar
    'nav.artworks': 'Kunstwerke',
    'nav.designs': 'Designs',
    'nav.creativeCoding': 'Creative Coding',
    'nav.photography': 'Fotografie',
    'nav.soundscapes': 'Klangwelten',

    // Hero
    'hero.tagline': 'S-Klasse Designerin ✦',
    'hero.greeting': 'HI, ICH BIN',
    'hero.contact': 'KONTAKT',
    'hero.scrollTop': 'SCHAU DIR',
    'hero.scrollMid': 'UNTEN',
    'hero.scrollBtm': 'AN!',

    // About / Workflow
    'about.p1':
      'Hi, ich bin Zelva, eine kreative Designerin, die an den Wert menschlicher Arbeit & Intelligenz glaubt. Fähig, menschliche Designlösungen für Menschen von mir im Zeitalter des AI-Mülls umzusetzen.',
    'about.p2':
      'Ich bin leidenschaftlich darin, Erfahrungen zu schaffen, die sich natürlich, intuitiv und visuell beeindruckend anfühlen. Kreativität ist universell, und gutes Design sollte für alle funktionieren.',
    'about.p3':
      'Sie können es sich nicht leisten, einen echten Profi durch ein Werkzeug zu ersetzen, das Sie beaufsichtigen müssen, das Ihre Marke nicht kennt und die menschliche Psychologie nicht versteht. Hier glänzen echte Produktdesignerinnen.',
    'workflow.heading': 'KEINE GRENZEN',
    'workflow.subtitle': 'PROFESSIONELLER DESIGN-WORKFLOW',
    'workflow.empathize': 'EINFÜHLEN',
    'workflow.define': 'DEFINIEREN',
    'workflow.ideate': 'IDEEN',
    'workflow.test': 'TESTEN',
    'workflow.prototype': 'PROTOTYP',
    'workflow.ship': 'LIEFERN',

    // Tools
    'tools.heading': 'MEINE WERKZEUGE',
    'tools.subtitle':
      'ps: Ich kann jedes Werkzeug benutzen, ein Werkzeug definiert nichts, ein Werkzeug ist ein Werkzeug. Man sollte einfach alle beherrschen, Adobe, Canva, Zed, Blender, After Effects, DaVinci.... Das ist meine Favoritenliste.',

    // Education
    'education.heading': 'AUSBILDUNG',
    'edu.certificates': 'ZERTIFIKATE',
    'edu.university': 'UNIVERSITÄT',
    'edu.freeThinker': 'FREIDENKER',
    'edu.languages': 'SPRACHEN',

    // Contact
    'contact.heading': 'KONTAKTIERE MICH!',
    'contact.emailPlaceholder': 'E-Mail',
    'contact.namePlaceholder': 'Spitzname/Name',
    'contact.messagePlaceholder': '__ lass uns zusammenarbeiten! >///< ',
    'contact.sending': 'Wird gesendet...',
    'contact.sent': 'Gruß gesendet!',
    'contact.shoutout': 'Gruß senden!',
    'contact.visualLine1': 'Lass uns etwas',
    'contact.visualLine2': 'Großartiges erschaffen.',

    // Footer
    'footer.legal': 'Rechtliches',
    'footer.copyright': 'Urheberrecht bei Zelva',
    'footer.madeWith': 'Erstellt mit Opencode, Zed & Figma',
    'footer.transRights': 'Transrechte sind Menschenrechte',

    // ScrollSpy
    'spy.cta': 'CTA',
    'spy.about': 'Über mich',
    'spy.skills': 'Fähigkeiten',
    'spy.education': 'Ausbildung',
    'spy.contact': 'Kontakt',
  },

  tr: {
    // Navbar
    'nav.artworks': 'Eserler',
    'nav.designs': 'Tasarımlar',
    'nav.creativeCoding': 'Yaratıcı Kodlama',
    'nav.photography': 'Fotoğrafçılık',
    'nav.soundscapes': 'Ses Tasarımı',

    // Hero
    'hero.tagline': 'S Sınıfı Tasarımcı ✦',
    'hero.greeting': 'MERHABA, BEN',
    'hero.contact': 'İLETİŞİM',
    'hero.scrollTop': 'AŞAĞIYA',
    'hero.scrollMid': 'BİR',
    'hero.scrollBtm': 'BAK!',

    // About / Workflow
    'about.p1':
      "Merhaba, ben Zelva, insan emeğinin ve zekasının değerine inanan yaratıcı bir tasarımcıyım. AI çöplüğü çağında insanlar için insan tasarım çözümleri uygulayabilecek kapasitedeyim.",
    'about.p2':
      'Doğal, sezgisel ve görsel olarak çarpıcı hissettiren deneyimler yaratmak konusunda tutkulum. Yaratıcılık evrenseldir ve iyi tasarım herkes için çalışmalıdır.',
    'about.p3':
      'Gerçek bir profesyoneli, markanızı tanımayan ve insan psikolojisini bilmeyen, sürekli kontrol etmeniz gereken bir araçla değiştirmeye gücünüz yetmez. Gerçek ürün tasarımcıları burada parlar.',
    'workflow.heading': 'SINIR YOK',
    'workflow.subtitle': 'PROFESYONEL TASARIM İŞ AKIŞI',
    'workflow.empathize': 'EMPATİ',
    'workflow.define': 'TANIMLA',
    'workflow.ideate': 'FİKİR',
    'workflow.test': 'TEST',
    'workflow.prototype': 'PROTOTİP',
    'workflow.ship': 'YAYINLA',

    // Tools
    'tools.heading': 'KULLANDIĞIM ARAÇLAR',
    'tools.subtitle':
      'not: Her aracı kullanabilirim, bir araç hiçbir şeyi tanımlamaz, araç araçtır. Kişi hepsini kullanabilmeli, Adobe, Canva, Zed, Blender, After Effects, DaVinci... Bu benim favorilerim listesi.',

    // Education
    'education.heading': 'EĞİTİM',
    'edu.certificates': 'SERTİFİKALAR',
    'edu.university': 'ÜNİVERSİTE',
    'edu.freeThinker': 'ÖZGÜR DÜŞÜNÜR',
    'edu.languages': 'DİLLER',

    // Contact
    'contact.heading': 'BENİMLE İLETİŞİME GEÇ!',
    'contact.emailPlaceholder': 'e-posta',
    'contact.namePlaceholder': 'Takma Ad/İsim',
    'contact.messagePlaceholder': '__ birlikte çalışalım! >///< ',
    'contact.sending': 'Gönderiliyor...',
    'contact.sent': 'Selam Gönderildi!',
    'contact.shoutout': 'Selam Gönder!',
    'contact.visualLine1': 'Birlikte harika',
    'contact.visualLine2': 'bir şeyler yaratalım.',

    // Footer
    'footer.legal': 'yasal bilgi',
    'footer.copyright': 'Telif hakkı Zelva\'ya aittir',
    'footer.madeWith': 'Opencode, Zed & Figma ile yapıldı',
    'footer.transRights': 'Trans hakları insan haklarıdır',

    // ScrollSpy
    'spy.cta': 'CTA',
    'spy.about': 'Hakkımda',
    'spy.skills': 'Yetenekler',
    'spy.education': 'Eğitim',
    'spy.contact': 'İletişim',
  },
}
