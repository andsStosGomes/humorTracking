
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { Footer } from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import { theme } from '@/shared/themes/Theme';
import { BaseInput } from '@/shared/components/BaseInput';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationScreenProp } from '@/Routes';

import { styles } from './style';


export default function HomePage() {
  const navigation = useNavigation<TabNavigationScreenProp>();

  const [name, setName] = React.useState<string>('');
  return (
    <>
      <Header name={name} />

      <Text style={{ fontFamily: theme.fonts.family.bold, fontSize: theme.fonts.size.large, textAlign: 'center' }}>Home</Text>

      <View style={{ flex: 1 }} />

      <Footer>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>Qual o seu nome?</Text>

          <BaseInput label='Nome' asBotton onPress={() => navigation.navigate('setUserName', undefined)}>
            <TextInput
              pointerEvents='none'
              editable={false}
              placeholder=' Escreva seu nome aqui'
              placeholderTextColor={theme.colors.textPlaceholder}
              style={styles.footerInput}
            />
          </BaseInput>
        </View>
      </Footer>

    </>
  );
}