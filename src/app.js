import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore();

const itemOne = store.dispatch(
  addExpense({ description: 'Water bill', amount: 1000, createdAt: 101 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 1000, createdAt: 111 })
);
store.dispatch(editExpense(itemOne.expense.id, { amount: 200 }));

store.dispatch(setTextFilter('water'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

ReactDOM.render(jsx, document.getElementById('app'));