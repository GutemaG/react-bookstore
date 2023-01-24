import { apiAddBook, apiFetchBooks, apiRemoveBook } from '../../api/api';

const ADDING_BOOK = 'react-bookstore/book/ADDING_BOOK';
const REMOVING_BOOK = 'react-bookstore/book/REMOVING_BOOK';
const FETCH_BOOKS = 'react-bookstore/book/FETCH_BOOK';

const initialState = [];

const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADDING_BOOK:
      return [...state, action.newBook];
    case REMOVING_BOOK:
      return state.filter((prev) => prev.id !== action.id);
    case FETCH_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  const books = await apiFetchBooks();
  dispatch({
    type: FETCH_BOOKS,
    books,
  });
};

export const addBook = (newBook) => async (dispatch) => {
  apiAddBook(newBook);
  dispatch(
    {
      type: ADDING_BOOK,
      newBook,
    },
  );
};

export const removeBook = (id) => async (dispatch) => {
  await apiRemoveBook(id);
  dispatch(
    {
      type: REMOVING_BOOK,
      id,
    },
  );
};

export default bookReducer;
