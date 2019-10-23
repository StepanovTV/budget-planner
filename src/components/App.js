import React from 'react';
import BudgetForm from './BudgetForm/BudgetFormConteiner';
import css from './App.module.css';
import Values from './Values/ValuesContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormConteiner';
import ExpensesTable from './ExpensesTable/ExpensesTableConteiner';

const App = () => (
  <main className={css.container}>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    <ExpensesTable />
  </main>
);

export default App;
