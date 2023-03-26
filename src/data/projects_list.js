import { useSelector } from 'react-redux';

import projectsEnglish from './english/projects/projects_list';
import projectsListFrench from './french/projects/projects_list_fr';

const projectsList = () => {
  const language = useSelector((state) => state.languageReducer);

  if (language.languageKey === 0) {
    return projectsEnglish();
  } if (language.languageKey === 1) {
    return projectsListFrench();
  }
};

export default projectsList;
