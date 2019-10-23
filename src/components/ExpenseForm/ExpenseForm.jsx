import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;

    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };

    this.props.onSaveExpense(expense);

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <div>
        <form className="styledForm" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="labelStyles">
            Enter expense name
            <input
              type="text"
              value={name}
              className="styledInput"
              onChange={this.handleChange}
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="expense_amount" className="labelStyles">
            Enter expense amount
            <input
              type="number"
              placeholder="..."
              value={amount === 0 ? '' : amount}
              className="styledInput"
              onChange={this.handleChange}
              name="amount"
              id="expense_amount"
            />
          </label>
          <button type="submit" className="styledButton">
            add
          </button>
        </form>
      </div>
    );
  }
}
ExpenseForm.propTypes = {
  onSaveExpense: PropTypes.func.isRequired,
};
export default ExpenseForm;
