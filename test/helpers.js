const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Boxian Deng',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Boxian Deng',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Boxian Deng',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Boxian Deng',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Boxian Deng',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
