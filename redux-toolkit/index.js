const store = require('./app/store');
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions;
const cakeAction = require('./features/cake/cakeSlice.js').cakeAction;

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
});

store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));

unsubscribe();
