import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {emailSignup} from '../redux/thunks/emailSignup';
import {emailSignin} from '../redux/thunks/emailSignin';
import {useErrorContext} from '@components/error_display/ErrorDisplay';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen = ({setIsLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {user, loading, error} = useAppSelector(state => state.auth);
  console.log('user: ', user, ' loading ', loading, ' error ', error);

  const handleLogin = () => {
    // Handle login logic here
    dispatch(emailSignin(email, password));
    console.log('Logging in...');
  };

  useEffect(() => {
    console.log('user: ', user);
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          mode="outlined"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          mode="contained"
          style={styles.loginButton}
          onPress={handleLogin}>
          Login
        </Button>
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.orLine} />
        </View>
        <Button
          mode="outlined"
          style={styles.googleButton}
          labelStyle={styles.googleBtnTextStyle}
          icon={({color}) => (
            <Ionicons name="logo-google" size={24} color={color} />
          )}
          onPress={() => console.log('Google Sign In')}>
          Sign in with Google
        </Button>
        <Button
          onPress={() => setIsLogin(false)}
          style={{marginTop: 30}}
          labelStyle={{color: '#000'}}>
          Switch to Signup
        </Button>
      </View>
    </View>
  );
};

export const SignupScreen = ({setIsLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {addErrorText, addSuccessText} = useErrorContext();
  const {user, loading, error} = useAppSelector(state => state.auth);
  console.log('user: ', user, ' loading ', loading, ' error ', error);
  const handleSignup = () => {
    // Handle signup logic here
    dispatch(emailSignup(email, password, addErrorText));
    console.log('Signing up...');
  };
  useEffect(() => {
    addErrorText('Error 1');
    addErrorText('Error 2');
    addSuccessText('Success Message 1');
  }, []);

  useEffect(() => {
    console.log('user: ', user);
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          mode="outlined"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          mode="contained"
          style={styles.signupButton}
          onPress={handleSignup}>
          Signup
        </Button>
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.orLine} />
        </View>
        <Button
          mode="outlined"
          style={styles.googleButton}
          labelStyle={styles.googleBtnTextStyle}
          icon={({color}) => (
            <Ionicons name="logo-google" size={24} color={color} />
          )}
          onPress={() => console.log('Google Sign In')}>
          Sign up with Google
        </Button>
        <Button
          onPress={() => setIsLogin(true)}
          style={{marginTop: 30}}
          labelStyle={{color: '#000'}}>
          Switch to Login
        </Button>
      </View>
    </View>
  );
};

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <LoginScreen setIsLogin={setIsLogin} />
  ) : (
    <SignupScreen setIsLogin={setIsLogin} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#2196f3',
  },
  signupButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#4caf50',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#DB4437', // Google Red
    borderColor: '#DB4437',
    borderWidth: 1,
  },
  googleBtnTextStyle: {color: '#fff'},
});

export default AuthScreen;
