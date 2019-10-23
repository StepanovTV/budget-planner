import { combineReducers } from 'redux';
import Type from './type';

const budget = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.SET_BUDGET:
      return payload;
    default:
      return state;
  }
};

const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE:
      return [payload, ...state];
    case Type.DELETE_EXPENSE:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

const BudgetAppReducer = combineReducers({
  budget,
  expenses,
});

export default BudgetAppReducer;
