import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Item } from '../../components/Item';

import { styles } from './styles';

type UserData = {
  id: string;
  name: string;
}

export function Profile() {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState<UserData[]>([]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />

        <Input
          placeholder="username"
          autoCapitalize="sentences"
          onChangeText={setUserName}
          value={userName}
          onPress={() => { }}
        />

        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (<Item value={item.name} />)}
          contentContainerStyle={styles.users}
        />

        <Button
          title="Synchronize"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}