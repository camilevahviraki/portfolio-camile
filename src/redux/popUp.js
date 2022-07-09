const SHOW_POPUP = 'src/redux/showPopUP';

export default function popUpReducer(state = [], action) {
  switch (action.type) {
    case SHOW_POPUP:
      return action.data;
    default:
      return state;
  }
}

export const showPop = (data) => ({ type: SHOW_POPUP, data });
