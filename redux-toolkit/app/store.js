const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const cakeReducer = require('../features/cake/cakeSlice')


const logger = reduxLogger.createLogger()
const store =  configureStore({
    reducer:{
        cakes: cakeReducer,
        iceCreams: icecreamReducer,

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

module.exports = store