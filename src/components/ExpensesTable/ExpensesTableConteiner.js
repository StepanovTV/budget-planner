import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from '../../hoc/withRenderLog';
import ExpensesTable from './ExpensesTable';
import { getExpenseArr } from '../../redux/BudgetApp/BudgetAppSelect';
import { onRemove } from '../../redux/BudgetApp/BudgetAppActions';

const mapStateToProps = state => ({
  expense: getExpenseArr(state),
});

const mapDispatchToProps = {
  onRemove,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRenderLog,
)(ExpensesTable);
