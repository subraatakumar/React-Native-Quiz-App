import {TextStyle} from 'react-native';

export type LoadingDialogDataType = {
  loadingDialogText: string;
  id: number;
  indicatorSize: 'small' | 'large';
  indicatorColor: string;
  textStyle: TextStyle;
};
