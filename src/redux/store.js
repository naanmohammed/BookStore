import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore({ reducer });
export default store;
