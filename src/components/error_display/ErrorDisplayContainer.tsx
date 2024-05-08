import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ErrorDisplayComponent from './ErrorDisplayComponent';

const ErrorDisplayContainer = props => {
  return <ErrorDisplayComponent {...props} />;
};

export default ErrorDisplayContainer;
