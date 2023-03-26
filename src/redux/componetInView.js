const SET_PAGE_IN_VIEW = 'src/redux/set_page_in_view';

export default function pageInViewReducer(state = {
  intro: true,
  services: false,
  projects: false,
  about: false,
  contact: false,
}, action) {
  switch (action.type) {
    case SET_PAGE_IN_VIEW: {
      let { intro } = state;
      let { services } = state;
      let { projects } = state;
      let { about } = state;
      let { contact } = state;

      if (action.data.page === 'intro') {
        intro = action.data.state;
        return {
          intro, services, projects, about, contact,
        };
      } if (action.data.page === 'services') {
        services = action.data.state;
        return {
          services, intro, projects, about, contact,
        };
      }
      if (action.data.page === 'projects') {
        projects = action.data.state;
        return {
          projects, intro, services, about, contact,
        };
      }
      if (action.data.page === 'about') {
        about = action.data.state;
        return {
          projects, intro, services, about, contact,
        };
      }
      if (action.data.page === 'contact') {
        contact = action.data.state;
        return {
          projects, intro, services, about, contact,
        };
      }
    }
    default:
      return state;
  }
}

export const setPageInView = (data) => ({ type: SET_PAGE_IN_VIEW, data });
