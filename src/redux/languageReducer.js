const SELECT_LANGUAGE = 'src/redux/select_language';

export default function languageReducer(state = { languageKey: 0 }, action) {
  switch (action.type) {
    case SELECT_LANGUAGE: {
      localStorage.setItem('language', JSON.stringify({ languageKey: action.data }));
      return { languageKey: action.data };
    }
    default: {
      const savedData = localStorage.getItem('language');
      if (savedData) {
        return JSON.parse(savedData);
      }
      return state;
    }
  }
}

export const setLanguage = (data) => ({ type: SELECT_LANGUAGE, data });
