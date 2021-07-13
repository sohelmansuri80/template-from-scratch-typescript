import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './first/firstSlice';
import logger from 'redux-logger';

const middlewares = [logger];

export const store = configureStore({
    reducer: {
        first: firstReducer,
    },
    middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
