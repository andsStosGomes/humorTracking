import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { BaseInput } from '@/shared/components/BaseInput';
import { theme } from '@/shared/themes/Theme';

import { styles } from './style';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { TNavigationScreenProps, TRouteProps } from '@/Routes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StarRating } from '@/shared/components/StarRating';


export default function DetailPage() {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'details'>>();

  console.log('Rate:', params.rate);

  return (
    <>

      <View style={styles.homeFooterContainer}>
        <Text style={styles.footerTitle}>
          Como você está seu humor hoje?'
        </Text>
        <View style={styles.footerContainer}>

          <StarRating
            value={params.rate}
            onchange={(rate) => navigation.navigate('details', { rate })}
            activeColor={theme.colors.highlight}
            inactiveColor={theme.colors.textPlaceholder} />

        </View>

        <BaseInput label='Data e hora'>
          <TextInput
            placeholder=' Escreva seu nome aqui'
            placeholderTextColor={theme.colors.textPlaceholder}
            style={styles.footerInput}
          />
        </BaseInput>

        <BaseInput
          label='Descreva mais sobre esse humor'>
          <TextInput
            placeholder=' Escreva seu nome aqui'
            placeholderTextColor={theme.colors.textPlaceholder}
            style={styles.footerInput}
          />
        </BaseInput>






      </View>

    </>
  );
}