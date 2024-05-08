import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import ErrorDisplayContainer from './ErrorDisplayContainer';
import {useAppSelector} from '@redux/store';

const MultipleErrorDisplay = props => {
  const {data, bottom} = props;
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((singleData, index) => (
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
