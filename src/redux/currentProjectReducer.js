const SET_CURRENT_PROJECT = 'src/redux/SET_CURRENT_PROJECT';

export default function currentProjectReducer(state = { }, action) {
  switch (action.type) {
    case SET_CURRENT_PROJECT: {
      localStorage.setItem('currentProject', JSON.stringify(action.data));
      return action.data;
    }
    default: {
      const project = localStorage.getItem('currentProject');
      if (project) {
        return JSON.parse(project);
      }
      return state;
    }
  }
}

export const setCurrentProject = (data) => ({ type: SET_CURRENT_PROJECT, data });
