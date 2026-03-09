import { BaseInput } from '@/shared/components/BaseInput';
import { theme } from '@/shared/themes/Theme';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@/shared/components/Button';

import { styles } from './style';
import { TNavigationScreenProps } from '@/Routes';
import { STORAGE_KEY } from '@/shared/Service/Store';
import { useStoredValue } from '@/shared/hooks/useStoredValue';


export default function SetUserNamePage() {
  const navigation = useNavigation<TNavigationScreenProps>();
  const insets = useSafeAreaInsets();

  const { value: name, setValue: setName, saveValue } = useStoredValue<string>(
    STORAGE_KEY.USER_NAME,
    ''
  );

  const handleSaveUserName = async () => {
    try {
      await saveValue(name);
      navigation.popTo('home', { newName: name });
    } catch (error) {
      console.error('Error saving user name:', error);
    }
  };

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
        onPress={handleSaveUserName}
      />
    </View>
  );
}

