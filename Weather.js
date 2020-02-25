import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Weather({ temp }) {
  console.log(temp)
  return (
    <View>
      <Text style={styles.text}>
        {temp}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#2c2c2c',
    fontSize: 42
  }
}) 