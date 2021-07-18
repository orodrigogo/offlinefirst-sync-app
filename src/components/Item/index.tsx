import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  value: string;
}

export function Item({ value, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.text}>
        {value}
      </Text>
    </View>
  );
}