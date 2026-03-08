import { BaseInput } from '@/shared/components/BaseInput';
import { theme } from '@/shared/themes/Theme';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@/shared/components/Button';

import { styles } from './style';
import { TNavigationScreenProps } from '@/Routes';


export default function SetUserNamePage() {
  const navigation = useNavigation<TNavigationScreenProps>();
  const insets = useSafeAreaInsets();


  const [name, setName] = React.useState<string>('');

  return (
    <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
      <Text style={styles.footerTitle}>Qual é o seu nome? {name}</Text>

      <BaseInput label='Nome' >
        <TextInput
          autoFocus
          placeholder=' Escreva seu nome aqui'
          placeholderTextColor={theme.colors.textPlaceholder}
          style={styles.SetUserNameInput}
          value={name}
          onChangeText={setName}
        />
      </BaseInput>

      <View style={{ flex: 1 }} />

      <Button
        title="Salvar"
        onPress={() => navigation.popTo('home', { newName: name })}
      />
    </View>
  );
}

