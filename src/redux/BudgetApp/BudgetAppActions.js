import Type from './type';

export const onSave = value => ({
  type: Type.SET_BUDGET,
  payload: value,
});

export const onSaveExpense = object => ({
  type: Type.ADD_EXPENSE,
  payload: object,
});

export const onRemove = id => ({
  type: Type.DELETE_EXPENSE,
  payload: id,
});
