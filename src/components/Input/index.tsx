import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';

import { theme } from '../../styles/theme';
import { styles } from './styles';

export interface InputProps extends TextInputProps {
  onPress: () => void;
}

export function Input({ onPress, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#AEAEB3"
        autoCorrect={false}
        style={styles.text}
        {...rest}
      />

      <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={onPress}>
        <Feather
          name="check"
          size={24}
          color={theme.colors.background_primary}
        />
      </TouchableOpacity>
    </View>
  );
}