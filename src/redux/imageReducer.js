const RESET_IMAGE_SHOWN = 'src/redux/RESET_IMAGE_SHOWN';
const SET_IMAGE_SHOWN = 'src/redux/SET_IMAGE_SHOWN';

export default function imageReducer(state = { image: 0 }, action) {
  switch (action.type) {
    case RESET_IMAGE_SHOWN: {
      return { image: 0 };
    } case SET_IMAGE_SHOWN: {
      return { image: action.imgKey };
    }
    default: {
      return state;
    }
  }
}

export const resetImageShown = () => ({ type: RESET_IMAGE_SHOWN });
export const setImageShown = (imgKey) => ({ type: SET_IMAGE_SHOWN, imgKey });
