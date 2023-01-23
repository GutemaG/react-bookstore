const ADDING_BOOK = 'react-bookstore/book/ADDING_BOOK';
const REMOVING_BOOK = 'react-bookstore/book/REMOVING_BOOK';

const initialState = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Science Fiction',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADDING_BOOK:
      return [...state, action.newBook];
    case REMOVING_BOOK:
      return state.filter((prev) => prev.id !== action.id);
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
