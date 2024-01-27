import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import icecreamReducer from '../features/icecream/icecreamSlice'
import cakeReducer from '../features/cake/cakeSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()
const store =  configureStore({
    reducer:{
        cakes: cakeReducer,
        iceCreams: icecreamReducer,
        user: userReducer,

    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})
export default store