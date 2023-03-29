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

const projectsListFrench = () => (
  [
    {
      id: 1,
      project_name: 'Scandi E-store',
      imgArray: [scandiImg5, scandiImg1, scandiImg3, scandiImg6],
      description: "Une boutique en ligne avec tous les outils dont vous avez besoin pour construire, gérer et développer votre entreprise. Créez votre boutique Ecwid en quelques minutes avec des options d'expédition, de paiement, de publicité et de taxe prêtes à l'emploi. Plan toujours gratuit. Rapide comme l'éclair. Intégration transparente sur un site existant.",
      languages: [
        'REACT',
        'REDUX',
        'GRAPH QL',
      ],
      technologies: [
        'Backend',
        'Frontend',
        'Serveur Apolo',
      ],
      live_link: 'https://scandi-e-store.netlify.app/',
      project_link: 'https://github.com/camilevahviraki/scandi-e-store',
    },
    {
      id: 2,
      project_name: 'Bike Shop',
      imgArray: [bikeShopImg7, bikeShopImg1, bikeShopImg2, bikeShopImg4, bikeShopImg5],
      description: "Acheter un nouveau vélo en ligne ? Ce n'est plus inhabituel de nos jours ! Un grand choix de produits et de marques plaide en sa faveur. Les bons magasins offrent un guichet unique pour les accessoires de vélo, les pièces de rechange et les vêtements de cyclisme.",
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
      description: "La librairie est une application d'exemple qui permet aux utilisateurs de stocker leurs livres pour qu'ils soient visibles par tout le monde. Les utilisateurs peuvent supprimer ou modifier leurs livres.",
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
      description: "Le Space Traveler Hub est une application d'exemple qui permet aux utilisateurs de voir les fusées et les missions de Space-X. Vous pouvez rejoindre des missions ou réserver une fusée et vous pouvez voir ces missions dans votre profil.",
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
      description: 'Une application simple de liste de tâches pour gérer vos tâches, projets et travaux d\'équipe.\
       Faites confiance à de nombreuses personnes et équipes dans le monde entier pour rester organisé.',
      languages: [
        'JAVASCRIPT',
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

export default projectsListFrench;
