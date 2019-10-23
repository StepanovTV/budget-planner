import { combineReducers } from 'redux';
import BudgetAppReducer from './BudgetApp/BudgetAppReducer';

const rootReducer = combineReducers({
  budget: BudgetAppReducer,
});

export default rootReducer;
