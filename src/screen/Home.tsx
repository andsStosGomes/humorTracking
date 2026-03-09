
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Footer } from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import { theme } from '@/shared/themes/Theme';
import { BaseInput } from '@/shared/components/BaseInput';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TNavigationScreenProps, TRouteProps } from '@/Routes';

import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

import { styles } from './style';
import { useStoredValue } from '@/shared/hooks/useStoredValue';
import { STORAGE_KEY } from '@/shared/Service';
import { StarRating } from '@/shared/components/StarRating';


export default function HomePage() {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'home'>>();


  const { value: userName, setValue: setUserName, clearValue } = useStoredValue<string>(
    STORAGE_KEY.USER_NAME,
    ''
  );

  const handleLogout = async () => {
    await clearValue();
  };

  React.useEffect(() => {
    if (params?.newName) {
      setUserName(params.newName);
    }
  }, [params?.newName, setUserName]);

  return (
    <>
      <Header name={userName} onLogout={handleLogout} />

      <Text style={{ fontFamily: theme.fonts.family.bold, fontSize: theme.fonts.size.large, textAlign: 'center' }}>Home</Text>

      <View style={styles.emptyContentContainer} >
        <Text style={styles.emptyContentText}>
          Você ainda não {'\n'}
          registrou seu Humor!
        </Text>
      </View>

      <Footer>
        <View style={styles.homeFooterContainer}>
          <Text style={styles.footerTitle}>
            {userName ? 'Como você está seu humor hoje?' : 'Qual o seu nome?'}
          </Text>

          {!userName && (
            <BaseInput label='Nome' asBotton onPress={() => navigation.navigate('setUserName', undefined)}>
              <TextInput
                pointerEvents='none'
                editable={false}
                placeholder=' Escreva seu nome aqui'
                placeholderTextColor={theme.colors.textPlaceholder}
                style={styles.footerInput}
              />
            </BaseInput>
          )}

          {userName && (
            <View style={styles.footerContainer}>
              <StarRating
                value={5}
                onchange={(rate) => navigation.navigate('details', { rate })}
                activeColor={theme.colors.textPlaceholder}
              />
              {/**<TouchableOpacity onPress={() => navigation.navigate('details', {rate: 4})}>
                <AntDesign name="star" size={36} color={theme.colors.textPlaceholder} />
              </TouchableOpacity>  */}
            </View>
          )}

        </View>
      </Footer>

    </>
  );
}