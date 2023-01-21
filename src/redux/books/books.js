const ADDING_BOOK = 'books/ADDING_BOOK';
const REMOVING_BOOK = 'books/REMOVING_BOOK';

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADDING_BOOK:
      return [...state, action.newBook];
    case REMOVING_BOOK:
      return state.filter((prev, index) => index !== action.id);
    default:
      return state;
  }
};

export const addBook = (newBook) => (
  {
    type: ADDING_BOOK,
    newBook,
  }
);

export const removeBook = (id) => (
  {
    type: REMOVING_BOOK,
    id,
  }
);

export default bookReducer;
