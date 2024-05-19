import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import ErrorDisplayContainer from './ErrorDisplayContainer';
import {ErrorTextType} from './ErrorDisplayTypes';

type MultipleErrorDisplayType = {
  data: ErrorTextType[];
  setData: (data: ErrorTextType[]) => void;
  bottom: number;
};
const MultipleErrorDisplay = (props: MultipleErrorDisplayType) => {
  const {data, bottom} = props;
  console.log('Errors: ', data);
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((singleData: ErrorTextType, index: number) => (
          <ErrorDisplayContainer
            key={index + '' + Date.now()}
            errorText={singleData?.errorText || ''}
            success={singleData?.success || false}
            id={singleData?.id || index}
            timeStamp={singleData?.timeStamp || Date.now()}
            {...props}
            bottom={(bottom ?? 40) + index * 60}
          />
        ))}
    </>
  );
};

export default MultipleErrorDisplay;
