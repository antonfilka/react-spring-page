export const thunkMiddleware = store => next => action => {
  typeof action == 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};
