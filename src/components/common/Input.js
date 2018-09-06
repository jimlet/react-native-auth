import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { containerStyle, labelStyle, inputStyle } = styles;
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      {/* Like an image - these render with 0 height and width by default. */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    height: 20,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  }
}

export { Input };