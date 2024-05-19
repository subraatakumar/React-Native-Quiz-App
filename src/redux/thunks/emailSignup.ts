import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {setLoading, setUser} from '../slices/authSlice';
import auth from '@react-native-firebase/auth';
import {addErrorTextType} from '@components/error_display/ErrorDisplayTypes';

export const emailSignup =
  (email: string, password: string, addErrorText: addErrorTextType) =>
  async (dispatch: ThunkDispatch<RootState, void, any>) => {
    try {
      if (email.trim().length == 0) throw new Error('Email is empty!');
      if (password.trim().length == 0) throw new Error('Password is empty!');
      dispatch(setLoading(true));
      console.log('user credentials: ', email, password);
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch(setUser(userCredential.user));
    } catch (error: {message: string} | any) {
      dispatch(addErrorText(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
