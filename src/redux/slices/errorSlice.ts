import {createSlice} from '@reduxjs/toolkit';
type errorTextType = {
  id: number;
  errorText: string;
  success?: boolean;
  timeStamp: number;
};
type InitialErrorSliceStateType = {
  errorTexts: errorTextType[];
  errorBottom?: 40;
};
const initialState: InitialErrorSliceStateType = {
  errorTexts: [],
  errorBottom: 40,
};

const errorSlice = createSlice({
  name: 'errors',
  initialState: initialState,
  reducers: {
    addErrorText: (state, action) => {
      console.log('adding error text with in slice', action?.payload);
      const duplicate = state.errorTexts.filter(eT => eT != action.payload);
      const time = Date.now();
      if (duplicate.length == 0) {
        state.errorTexts = [
          ...state.errorTexts,
          {
            id: time,
            errorText: action.payload,
            timeStamp: time,
            success: false,
          },
        ];
        console.log('error text added with in slice');
      }
    },
    addSuccessText: (state, action) => {
      const duplicate = state.errorTexts.filter(eT => eT != action.payload);
      const time = Date.now();
      if (duplicate.length == 0) {
        state.errorTexts = [
          ...state.errorTexts,
          {
            id: time,
            errorText: action.payload,
            timeStamp: time,
            success: true,
          },
        ];
      }
    },
    removeErrorText: (state, action) => {
      state.errorTexts = state.errorTexts.filter(
        x => x.errorText != action.payload,
      );
    },
    setErrorBottom: (state, action) => {
      state.errorBottom = action.payload;
    },
    resetErrors: state => initialState,
    resetErrorBottom: state => {
      state.errorBottom = 40;
    },
  },
});

export const {
  addErrorText,
  addSuccessText,
  removeErrorText,
  setErrorBottom,
  resetErrorBottom,
  resetErrors,
} = errorSlice.actions;
export default errorSlice.reducer;
