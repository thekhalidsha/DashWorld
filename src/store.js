import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from './features/api/countriesApi';

export default configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
