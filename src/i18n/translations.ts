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
      "I combine technical fluency with human intuition — designing interfaces, experiences, and systems that feel alive, not generated. Every pixel serves a purpose, every interaction tells a story.",
    'about.p2':
      "My work sits at the intersection of design and code. I don't just visualize ideas — I build them. From generative art to production-ready interfaces, I craft experiences that are as functional as they are beautiful.",
    'about.p3':
      "Design is not decoration. It's problem-solving at the highest level. I approach every project with empathy, rigor, and a refusal to settle for anything less than exceptional.",
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
      'Ich vereine technische Fluency mit menschlicher Intuition — und entwerfe Interfaces, Erlebnisse und Systeme, die lebendig wirken, nicht generiert. Jedes Pixel hat einen Zweck, jede Interaktion erzählt eine Geschichte.',
    'about.p2':
      'Meine Arbeit befindet sich an der Schnittstelle von Design und Code. Ich visualisiere Ideen nicht nur — ich baue sie. Von generativer Kunst bis zu produktionsreifen Interfaces schaffe ich Erlebnisse, die ebenso funktional wie schön sind.',
    'about.p3':
      'Design ist keine Dekoration. Es ist Problemlösung auf höchstem Niveau. Ich gehe jedes Projekt mit Empathie, Rigorosität und dem Anspruch an, nichts weniger als Exzellentes zu akzeptieren.',
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
      "Teknik yetkinliği insan sezgisiyle birleştiriyorum — canlı hissettiren, üretilmiş değil tasarlanmış arayüzler, deneyimler ve sistemler yaratıyorum. Her pikselin bir amacı var, her etkileşim bir hikaye anlatıyor.",
    'about.p2':
      'Çalışmalarım tasarım ve kodun kesişim noktasında. Fikirleri sadece görselleştirmiyorum — onları inşa ediyorum. Generatif sanattan üretime hazır arayüzlere, hem işlevsel hem güzel deneyimler yaratıyorum.',
    'about.p3':
      'Tasarım süsleme değildir. En yüksek seviyede problem çözmektir. Her projeye empati, titizlik ve olağanüstünün altına imza atmama izin vermeyeceğim bir anlayışla yaklaşıyorum.',
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
