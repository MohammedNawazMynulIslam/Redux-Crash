const store = require('./app/store')

const cakeAction = require('./features/cake/cakeSlice.js').cakeAction

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState());
})

store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(3))

unsubscribe()