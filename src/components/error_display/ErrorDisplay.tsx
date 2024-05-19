// ErrorContext.ts
import React, {createContext, useContext, useState, ReactNode} from 'react';
import MultipleErrorDisplay from './MultipleErrorDisplay';
import {ErrorContextType, ErrorTextType} from './ErrorDisplayTypes';

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

const ErrorProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [errorTexts, setErrorTexts] = useState<ErrorTextType[]>([]);
  const [errorBottom, setErrorBottom] = useState(40);

  const addErrorText = (text: string) => {
    const newError: ErrorTextType = {
      id: Date.now(),
      errorText: text,
      success: false,
      timeStamp: Date.now(),
    };
    setErrorTexts(prev => [...prev, newError]);
  };
  const addSuccessText = (text: string) => {
    const newError: ErrorTextType = {
      id: Date.now(),
      errorText: text,
      success: true,
      timeStamp: Date.now(),
    };
    setErrorTexts([...errorTexts, newError]);
  };

  const removeErrorText = (text: string) => {
    setErrorTexts(errorTexts.filter(error => error.errorText != text));
  };

  return (
    <ErrorContext.Provider
      value={{
        errorTexts,
        addErrorText,
        addSuccessText,
        removeErrorText,
        errorBottom,
        setErrorBottom,
      }}>
      {children}
      <MultipleErrorDisplay
        data={errorTexts}
        setData={setErrorTexts}
        bottom={errorBottom}
      />
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;

export const useErrorContext = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useErrorContext must be used within an ErrorProvider');
  }
  return context;
};
