const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const cakeReducer = require('../features/cake/cakeSlice')
const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()
const store =  configureStore({
    reducer:{
        cakes: cakeReducer,
        iceCreams: icecreamReducer,
        user: userReducer,

    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

module.exports = store