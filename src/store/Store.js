import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";

import persistStore from "redux-persist/es/persistStore";

import storage from "redux-persist/lib/storage";
import users from '../store/User';
import Cart from "./Cart";


const rootreducer = combineReducers(
    {
        userId: users, cart: Cart
    }
)

const persistreducer = persistReducer(
    {
        key: 'root',
        storage,
        whitelist: ['userId', 'cart']
    }, rootreducer
)

const store = configureStore(
    {
        reducer: persistreducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                serializableCheck:
                {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
// const store= configureStore({
//     reducer:{userId:users,cart:Cart}
// })
const persister =persistStore(store);

export {rootreducer,persister,store} 