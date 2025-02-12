import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)
export default store