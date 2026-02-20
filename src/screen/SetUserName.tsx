import { BaseInput } from '@/shared/components/BaseInput';
import { theme } from '@/shared/themes/Theme';
import React from 'react';
import { Text, TextInput, View } from 'react-native';


import { styles } from './style';

export default function SetUserNamePage() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerTitle}>Qual o seu nome?</Text>

      <BaseInput label='Nome' >
        <TextInput
          placeholder=' Escreva seu nome aqui'
          placeholderTextColor={theme.colors.textPlaceholder}
          style={styles.SetUserNameInput}
        />
      </BaseInput>
    </View>
  );
}