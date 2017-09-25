import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { highlightColor, highlightBackgroundColor } from '../../themes/default/colors';

export default function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.submitButton}
      onPress={onPress}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitButton: {
    padding: 15,
    backgroundColor: highlightBackgroundColor,
    borderRadius: 15
  },
  submitButtonText: {
    color: highlightColor
  }
})
