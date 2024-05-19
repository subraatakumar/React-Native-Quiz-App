export type addErrorTextType = (text: string) => void;
export type addSuccessTextType = (text: string) => void;
export type removeErrorTextType = (text: string) => void;
export type ErrorTextType = {
  id: number;
  errorText: string;
  success?: boolean;
  timeStamp: number;
};

export type ErrorContextType = {
  errorTexts: ErrorTextType[];
  addErrorText: addErrorTextType;
  addSuccessText: addSuccessTextType;
  removeErrorText: removeErrorTextType;
  errorBottom: number;
  setErrorBottom: (no: number) => void;
};
