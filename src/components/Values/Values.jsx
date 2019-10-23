import React from 'react';
import PropTypes from 'prop-types';
import css from './Values.module.css';

const Values = ({ budget, expenses, balance }) => {
  return (
    <div className={css.content}>
      <div className={css.iner}>
        <span className={css.valLablel}>Budget</span>
        <span className={css.valVall}>{budget}&nbsp;&#x24;</span>
      </div>
      <div className={css.iner}>
        <span className={css.valLablel}>Expenses</span>
        <span className={css.valVall}>{expenses}&nbsp;&#x24;</span>
      </div>
      <div className={css.iner}>
        <span className={css.valLablel}>Balance</span>
        <span className={balance <= 0 ? css.redMinus : css.valVall}>
          {balance}&nbsp;&#x24;
        </span>
      </div>
    </div>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
export default Values;
