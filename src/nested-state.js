const redux = require("redux");
const produce = require('immer').produce;

// rest of the code remains the same

// initial state
const initialState={
    name:'Dog',
    address:{
        street:'123 Main St',
        city:'Anytown',
        state:'MA',
    }
}

// 1.define const type

const STREET_UPDATED='STREET_UPDATED'

//2. action
const updateStreet = street=>{
    return {
        type: STREET_UPDATED,
        payload:street
    }
}

// 3. reducer

const reducer = (state= initialState,action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street: action.payload,
            //     },
            // }
            return produce(state,draft =>{
                draft.address.street=action.payload;
                })
            default:{
                return state;
            }
    }
}

const store = redux.createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Updated state', store.getState())
})
store.dispatch(updateStreet('456 main st'))
unsubscribe()