import type { ProjectWithImage } from '../types';

import newsArticlesImage from '../assets/news-articles.png';
import infoScreenImage from '../assets/infoscreen.png';
import bibtexProjectImage from '../assets/bibtex-project.png';

const projects = [
  {
    title: 'News article scraping tool',
    description:
      'A tool for saving and managing news articles from RSS feeds, built with Tkinter and Python',
    link: 'https://github.com/jipeso/ohjelmistotekniikka',
  },
  {
    title: 'Infoscreen',
    description:
      "Web application for university's infoscreens with an interactive floorplan, a bulletin board and a restaurant menu built with React, Node.js, MongoDB, Redis and Docker",
    link: 'https://github.com/Infopisteprojekti/infopiste',
  },
  {
    title: 'BibTeX reference tool',
    description: 'A tool for creating BibTeX references built with Python',
    link: 'https://github.com/ruokokoski/ohtu-miniprojekti',
  },
];

export const projectData: ProjectWithImage[] = projects.map((project) => {
  let imagePath = '';

  switch (project.title) {
    case 'News article scraping tool':
      imagePath = newsArticlesImage;
      break;
    case 'Infoscreen':
      imagePath = infoScreenImage;
      break;
    case 'BibTeX reference tool':
      imagePath = bibtexProjectImage;
      break;
    default:
      imagePath = bibtexProjectImage;
  }

  return {
    ...project,
    image: imagePath,
  };
});
