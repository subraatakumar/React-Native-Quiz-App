import {createSlice} from '@reduxjs/toolkit';

type loadingDialogTextType = {
  loadingDialogText: string;
  id: number;
};
type InitialModalSliceStateType = {
  loadingDialogTexts: loadingDialogTextType[];
};
const initialState = {
  loadingDialogTexts: [],
};

const loadingModalSlice = createSlice({
  name: 'loadingModal',
  initialState: initialState,
  reducers: {
    addLoadingModal: (state, action) => {
      state.loadingDialogTexts = [...state.loadingDialogTexts, action.payload];
    },
    deleteLoadingModal: (state, action) => {
      state.loadingDialogTexts = state.loadingDialogTexts.filter(
        x => x.id != action.payload,
      );
    },
    resetLoadingModals: () => initialState,
  },
});

export const {addLoadingModal, deleteLoadingModal, resetLoadingModals} =
  loadingModalSlice.actions;
export default loadingModalSlice.reducer;
