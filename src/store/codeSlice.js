// src/store/codeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const codeSlice = createSlice({
  name: 'code',
  initialState: {
    codeInput: '',
    codeSuggestion: '',
  },
  reducers: {
    setCodeInput: (state, action) => {
      state.codeInput = action.payload;
    },
    setCodeSuggestion: (state, action) => {
      state.codeSuggestion = action.payload;
    },
  },
});

export const { setCodeInput, setCodeSuggestion } = codeSlice.actions;

export default codeSlice.reducer;

