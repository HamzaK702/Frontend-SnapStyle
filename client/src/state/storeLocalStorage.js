import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import { authSlice } from './index'; // Adjust the import path accordingly

// Define your persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // You can choose which reducers to persist; here we're persisting just the auth reducer
};

// Use combineReducers if you have more reducers, for demo purposes, it's just auth here
const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Modify the store configuration to use the persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  // Add any middleware or enhancers here
});

// Create a persistor for your store
export const persistor = persistStore(store);
