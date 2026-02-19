
import React from 'react';
import { Text, View } from 'react-native';

import { Footer } from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import { theme } from '@/shared/themes/Theme';
import { BaseInput } from '@/shared/components/BaseInput';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationScreenProp } from '@/Routes';



export default function HomePage() {
  const navigation = useNavigation<TabNavigationScreenProp>();

  const [name, setName] = React.useState<string>('');
  return (
    <>
      <Header name={name} />  
      <Text style={{ fontFamily:theme.fonts.family.bold, fontSize: theme.fonts.size.large, textAlign: 'center' }}>Home</Text>
      <View style={{ flex: 1 }} />
      <Footer>
        <BaseInput label='Nome' asBotton onPress={() => navigation.navigate('setUserName', undefined)}>
          <Text style={{ fontFamily: theme.fonts.family.regular, fontSize: theme.fonts.size.small, marginBottom: 8 }}>Digite seu nome</Text>
        </BaseInput>
      </Footer>
      
    </>
  );
}