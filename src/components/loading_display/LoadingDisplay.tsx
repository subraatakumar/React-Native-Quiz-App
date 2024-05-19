import React, {createContext, useContext, useState, ReactNode} from 'react';
import {LoadingDialogDataType} from './LoadingDialogTypes';
import LoadingDialog from './LoadingDialog';

type LoadingModalContextType = {
  loadingDialogTexts: LoadingDialogDataType[];
  addLoadingDialog: (data: LoadingDialogDataType) => void;
  removeLoadingDialog: (id: number) => void;
};

const LoadingModalContext = createContext<LoadingModalContextType | undefined>(
  undefined,
);

const LoadingModalProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loadingDialogTexts, setLoadingDialogTexts] = useState<
    LoadingDialogDataType[]
  >([]);

  const addLoadingDialog = (data: LoadingDialogDataType) => {
    if (
      Object.keys(data).includes('id') &&
      Object.keys(data).includes('loadingDialogText')
    ) {
      console.log('setting loading dialog text:', data);
      setLoadingDialogTexts(prev => [...prev, data]);
    }
  };

  const removeLoadingDialog = (id: number) => {
    setLoadingDialogTexts(prev => prev.filter(dialog => dialog.id !== id));
  };

  return (
    <LoadingModalContext.Provider
      value={{
        loadingDialogTexts,
        addLoadingDialog,
        removeLoadingDialog,
      }}>
      {children}
      <LoadingDialog {...loadingDialogTexts[0]} />
    </LoadingModalContext.Provider>
  );
};

export default LoadingModalProvider;

export const useLoadingModalContext = (): LoadingModalContextType => {
  const context = useContext(LoadingModalContext);
  if (!context) {
    throw new Error(
      'useLoadingModalContext must be used within a LoadingModalProvider',
    );
  }
  return context;
};
