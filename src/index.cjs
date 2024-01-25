const redux = require("redux");
// middleware
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// Define
const ICECREAM_ORDERED= 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    };
}

// Action
function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    };
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    };
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    };
}

// Initial state
const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState= {
    numOfIceCream: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            };

        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload,
            };
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload,
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
   {}
);

const actions = bindActionCreators(
    { orderCake, restockCake, orderIceCream, restockIceCream },
    store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.restockIceCream(5);

unsubscribe();
