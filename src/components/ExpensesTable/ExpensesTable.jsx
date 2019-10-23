import React from 'react';
import PropTypes from 'prop-types';
import css from './ExpensesTable.module.css';

const ExpensesTable = ({ expense, onRemove }) => {
  return (
    <>
      {' '}
      {expense.length > 0 && (
        <table className={css.styledTable}>
          <thead>
            <tr>
              <th>Expense name</th>
              <th>Expense amount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {expense.map(({ id, name, amount }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{amount}</td>
                <td>
                  <button
                    type="button"
                    className="styledButton"
                    onClick={() => onRemove(id)}
                  >
                    dell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
ExpensesTable.propTypes = {
  expense: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ExpensesTable;
