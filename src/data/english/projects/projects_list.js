import scandiImg1 from '../../../images/projects/scandi-e-store/scandi-img1.png';
import scandiImg6 from '../../../images/projects/scandi-e-store/scandi-img6.png';
import scandiImg3 from '../../../images/projects/scandi-e-store/scandi-img3.png';
import scandiImg5 from '../../../images/projects/scandi-e-store/scandi-img5.png';
import bikeShopImg1 from '../../../images/projects/bike-shop/img1.png';
import bikeShopImg2 from '../../../images/projects/bike-shop/img2.png';
import bikeShopImg4 from '../../../images/projects/bike-shop/img4.png';
import bikeShopImg5 from '../../../images/projects/bike-shop/img5.png';
import bikeShopImg7 from '../../../images/projects/bike-shop/img7.png';
import bookStoreImg from '../../../images/projects/book-store/book-store-img.png';
import spaceImg1 from '../../../images/projects/space-traveller/img1.jpeg';
import spaceImg2 from '../../../images/projects/space-traveller/img2.png';
import spaceImg3 from '../../../images/projects/space-traveller/img3.png';
import todoImg1 from '../../../images/projects/TodoList/todo1.png';
import todoImg2 from '../../../images/projects/TodoList/todo2.png';

const projectsEnglish = () => (
  [
    {
      id: 1,
      project_name: 'Scandi E-store',
      imgArray: [scandiImg5, scandiImg1, scandiImg3, scandiImg6],
      description: 'An online store with all the tools you need to build, manage, n\
            and grow your business. Ecwid store in minutes with shipping, tax, payment, n\
            advertising options ready. Always Free Plan. Lightning Fast. Seamless Upgrades.n\
            Existing Site Integration.',
      languages: [
        'REACT',
        'REDUX',
        'GRAPH QL',
      ],
      technologies: [
        'Backend',
        'Frontend',
        'Apolo server',
      ],
      live_link: 'https://scandi-e-store.netlify.app/',
      project_link: 'https://github.com/camilevahviraki/scandi-e-store',
    },
    {
      id: 2,
      project_name: 'Bike Shop',
      imgArray: [bikeShopImg7, bikeShopImg1, bikeShopImg2, bikeShopImg4, bikeShopImg5],
      description: "Purchase a new bike online? It\'s no longer unusual these days! Huge selection n\
             of goods and brands speaks in its favor. Good shops offer one-stop shopping for cycling acces­sories, n\
              spares and bike wear.",
      languages: [
        'REACT',
        'REDUX',
        'RUBY ON RAILS',
      ],
      technologies: [
        'Frontend',
        'Netlify',
        'Docker',
      ],
      live_link: 'https://bike-shop-cmlx.netlify.app/',
      project_link: 'https://github.com/camilevahviraki/bike-shop-backend',
    },
    {
      id: 3,
      project_name: 'Smart Library',
      imgArray: [bookStoreImg],
      description: 'The book store is a sample app that allows users to store their books so they n\
            can be visible by everyone.The users could delete their books or edit them.',
      languages: [
        'REACT',
        'REDUX',
        'RUBY ON RAILS',
      ],
      technologies: [
        'Tailwind css',
        'Netlify',
        'Docker',
      ],
      live_link: 'https://book-store-camile.netlify.app/',
      project_link: 'https://github.com/camilevahviraki/Book-store',
    },
    {
      id: 4,
      project_name: 'Space Traveller',
      imgArray: [spaceImg1, spaceImg2, spaceImg3],
      description: 'The Space Traveler Hub is a sample app that allows users view Space-X Rockets n\
             and Missions. You can Join Missions or reserve a Rocket and you can view those missions in your profile.',
      languages: [
        'REACT',
        'REDUX',
      ],
      technologies: [
        'Netlify',
        'Docker',
      ],
      live_link: 'https://space-travelers-hub-c.netlify.app/',
      project_link: 'https://github.com/camilevahviraki/Space-Travelers-Hub',
    },
    {
      id: 5,
      project_name: 'To do list',
      imgArray: [todoImg1, todoImg2],
      description: 'A simple to do list app to manage your tasks, projects, and team\'s work.\
       Trusted by many individuals and teams worldwide to stay organized.',
      languages: [
        'Vanila JAVASCRIPT',
        'Webpack',
      ],
      technologies: [
        'Netlify',
        'Jest',
      ],
      live_link: 'https://camile-to-do-list-app.netlify.app/',
      project_link: 'https://github.com/camilevahviraki/To-do-list-app-',
    },
  ]
);

export default projectsEnglish;
