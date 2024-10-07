import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import storage from redux-persist

// Define persistConfig for redux-persist
const persistConfig = {
  key: 'root',
  storage, // Now storage is defined
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer, // Use the persisted reducer
  },
});

// Create persistor
export const persistor = persistStore(store); // Export persistor

export default store; 