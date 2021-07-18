import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Users
      </Text>

      <Text style={styles.subtitle}>
        A simple list of user names {'\n'}
        to focus on learning
      </Text>
    </View>
  );
}