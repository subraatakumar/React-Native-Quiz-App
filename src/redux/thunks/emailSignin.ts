import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {setError, setLoading, setUser} from '../slices/authSlice';
import {firebase} from '@react-native-firebase/auth';

export const emailSignin =
  (email: string, password: string) =>
  async (dispatch: ThunkDispatch<RootState, void, any>) => {
    try {
      dispatch(setLoading(true));
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(setUser(userCredential.user));
    } catch (error: {message: string} | any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
