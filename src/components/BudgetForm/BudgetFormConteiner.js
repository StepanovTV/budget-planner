import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from '../../hoc/withRenderLog';
import BudgetForm from './BudgetForm';
import { onSave } from '../../redux/BudgetApp/BudgetAppActions';

const mapDispatchToProps = {
  onSave,
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRenderLog,
)(BudgetForm);
