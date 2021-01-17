import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Oğuzhan Karaçar',
  lang: 'tr',
  description: 'Web siteme hoşgeldiniz.',
};

// HERO DATA
export const heroData = {
  title: 'Merhaba, ben',
  name: 'Oğuzhan',
  subtitle: 'Junior Frontend Developer',
  cta: 'Hakkımda',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-2-dark.jpg',
  paragraphOne:
    "Merhabalar ben Oğuzhan Karaçar. 25 yaşındayım. Ankara'da yaşıyorum. 1 yıldır frontend development ile ilgileniyorum. Uzun yıllar bir hobi olarak, bireysel işlerimde kullanmak üzere web teknolojileri ile ilgilendikten sonra tam zamanlı çalışmaya, ve kariyerime bu alanda devam etmeye karar verdim.",
  paragraphTwo:
    'Front end dünyasındaki gelişmeleri takip etmeye ve güncel teknolojileri öğrenmeye ve kullanmaya çalışıyorum. Genel olarak Javascript teknolojileri ile ilgileniyorum. Bu süreçte NodeJS, Express, React, Redux, Typescript gibi teknolojileri öğrendim ve kullanıyorum.',
  paragraphThree:
    'Beni daha yakından tanımak ve bana ulaşmak için sosyal medya hesaplarıma göz atabilirsiniz.',
  resume: 'https://drive.google.com/file/d/1G04fgYCtXI6Df4L_f8n_c3VV2WL5MhI-/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Twitter Clone with Next.js',
    info: 'Twitter Clone App',
    info2: '',
    url: 'https://nextjs-twitter-oz.vercel.app/',
    repo: 'https://github.com/oguzkaracar/nextjs-twitter-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: 'Nodejs Library App',
    info: 'Nodejs ile kütüphane ve yazar sistemi',
    info2: '',
    url: 'https://nodejs-mybrary-tr.herokuapp.com/',
    repo: 'https://github.com/oguzkaracar/Node-Library-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-1.jpg',
    title: 'Nodejs Markdown Blog',
    info: 'Nodejs ile kişisel blog sayfası',
    info2: 'Markdown kullanarak kişisel blog sayfası yaptım.',
    url: 'https://oguzkaracar.herokuapp.com/',
    repo: 'https://github.com/oguzkaracar/oguzkaracar.com', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Benimle çalışmak ister misiniz?',
  btn: 'Bana Ulaşın',
  email: 'mailto:oguzkaracar@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/oguzkaracar',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/oguzhan-karacar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oguzhan-karacar/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/oguzhankaracar',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/oguzhnkrcr/',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@oguzhankaracar',
    },
  ],
};
