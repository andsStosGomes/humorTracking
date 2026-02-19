import { BaseInput } from '@/shared/components/BaseInput';
import { theme } from '@/shared/themes/Theme';
import React from 'react';
import { Text, TextInput, View } from 'react-native';


export default function SetUserNamePage() {
  return (
    <View>
      <BaseInput label='Nome' >
         <TextInput/>
      </BaseInput>
    </View>
  );
}