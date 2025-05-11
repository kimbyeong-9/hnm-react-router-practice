// import {createStore,applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {thunk} from 'redux-thunk';
// import rootReducer from './reducers';
// import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSilce';
import authenticateReducer from './reducers/authenticateReducer';


// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer:{
        auth:authenticateReducer,
        product:productReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;