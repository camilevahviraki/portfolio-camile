const SHOW_FOOTER = 'src/redux/showPopUP';

export default function footerReducer(state = { state: true }, action) {
  switch (action.type) {
    case SHOW_FOOTER:
      return action.data;
    default:
      return state;
  }
}

export const showFooter = (data) => ({ type: SHOW_FOOTER, data });
