import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BudgetForm.module.css';

class BudgetForm extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;

    if (!Number.isNaN(Number(value))) this.props.onSave(Number(value));
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form className="styledForm" onSubmit={this.handleSubmit}>
          <label htmlFor="total_budget" className="labelStyles">
            Enter your total budget
            <input
              type="number"
              placeholder="..."
              value={value}
              className="styledInput"
              onChange={this.handleChange}
              name="total_budget"
              id="total_budget"
            />
          </label>
          <button type="submit" className="styledButton">
            save
          </button>
        </form>
      </div>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
export default BudgetForm;
