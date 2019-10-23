import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from '../../hoc/withRenderLog';
import ExpenseForm from './ExpenseForm';
import { onSaveExpense } from '../../redux/BudgetApp/BudgetAppActions';

const mapDispatchToProps = { onSaveExpense };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRenderLog,
)(ExpenseForm);
