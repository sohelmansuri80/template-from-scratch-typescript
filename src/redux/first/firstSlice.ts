import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FirstState {
    message: string;
}

const initialState: FirstState = {
    message: 'Hello, World',
};

export const firstSlice = createSlice({
    name: 'first',
    initialState,
    reducers: {
        updateMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
});

export const { updateMessage } = firstSlice.actions;

export const messageSelector = (state: RootState) => state.first.message;

export default firstSlice.reducer;
