import { createSlice } from "@reduxjs/toolkit";

interface Counterstate {
  count: number;
  isReady: boolean;
}

const initialState: Counterstate = {
  count: 5,
  isReady: false,
};

const counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: payloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCounter(state, action: payloadAction<number>) {
      if (action.payload <= 0) action.payload = 0;

      state.count = action.payload;
    },
  },
});

export const { initCounterState, addOne, substractOne, resetCounter } =
  counterslice.actions;

export default counterslice.reducer;
