const CHECKING_STATUS = 'react-bookstore/category/CHECKING_STATUS';

const categoryReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export const checkStatus = () => (
  {
    type: CHECKING_STATUS,
  }
);

export default categoryReducer;
