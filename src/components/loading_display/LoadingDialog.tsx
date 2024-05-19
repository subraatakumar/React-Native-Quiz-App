import {View, Text, Modal, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';

const LoadingDialog = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={
        props?.loadingDialogText ? props?.loadingDialogText.length > 0 : false
      }
      style={styles.modal}>
      <Pressable style={styles.container}>
        <View style={styles.dialog}>
          <ActivityIndicator
            size={props?.indicatorSize || 'large'}
            color={props?.indicatorColor || 'rgba(0,0,0,0.5)'}
            style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
          />
          <Text style={[{color: 'rgba(0,0,0,0.5)'}, props?.textStyle]}>
            {props?.loadingDialogText || 'Please wait...'}
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
};

export default LoadingDialog;

const styles = StyleSheet.create({
  modal: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialog: {
    backgroundColor: 'white',
    paddingTop: 32,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    margin: 50,
    borderRadius: 10,
    width: 312,
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
