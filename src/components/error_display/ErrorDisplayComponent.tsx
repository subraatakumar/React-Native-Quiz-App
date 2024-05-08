import {View, Text, StyleSheet, Modal, Pressable, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useErrorContext} from './ErrorDisplay';

const ErrorDisplayComponent = props => {
  const {timeStamp, errorText, success} = props;
  const {removeErrorText} = useErrorContext();
  console.log(
    'Data found with in ErrorDisplayComponent',
    props?.errorText.length > 0,
    props,
  );
  const handleClose = () => {
    removeErrorText(props?.errorText || '');
  };
  useEffect(() => {
    const delay = 10000000; // 10 seconds
    const timeElapsed = Date.now() - timeStamp;
    const remainingDelay = Math.max(0, delay - timeElapsed);

    // Timeout is set here, and timeoutId is stored in the dialog object
    setTimeout(() => {
      handleClose();
    }, remainingDelay);
    console.log('will close after: ', remainingDelay);
  }, [props]);
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={props?.errorText.length > 0}
      style={styles.modal}>
      <Pressable style={styles.container} onPress={handleClose}>
        <View
          style={{
            backgroundColor: props?.success ? '#DFF2EE' : '#FFF2F1',
            width: 327,
            borderRadius: 8,
            bottom: props?.bottom || 40,
            padding: 12,
            flexDirection: 'row',
            gap: 10,
          }}>
          {props?.success ? <Text>✅</Text> : <Text>⚠️</Text>}
          <Text style={{flex: 1, color: success ? '#007358' : '#DB1835'}}>
            {errorText}
          </Text>
          <Pressable onPress={handleClose}>
            <Text>❌</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ErrorDisplayComponent;

const styles = StyleSheet.create({
  modal: {},
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 312,
    height: 220,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
