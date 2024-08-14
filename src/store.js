import { createStore } from 'redux';

const initialState = {
  comments: [],
};

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return { ...state, comments: [...state.comments, action.payload] };
    case 'EDIT_COMMENT':
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id ? { ...comment, text: action.payload.text } : comment
        ),
      };
    case 'DELETE_COMMENT':
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(commentsReducer);

export default store;