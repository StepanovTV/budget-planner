// import { createSelector } from 'reselect';

export const getBudget = state => state.budget.budget;

export const getExpenses = state =>
  state.budget.expenses.reduce((total, expense) => total + expense.amount, 0);

export const getBalance = state => getBudget(state) - getExpenses(state);

export const getExpenseArr = state => state.budget.expenses;
