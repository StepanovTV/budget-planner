import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from '../../hoc/withRenderLog';
import Values from './Values';
import {
  getBudget,
  getExpenses,
  getBalance,
} from '../../redux/BudgetApp/BudgetAppSelect';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
  balance: getBalance(state),
});

export default compose(
  connect(mapStateToProps),
  withRenderLog,
)(Values);
