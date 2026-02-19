import React from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';


interface IFooterProps {
    children?: React.ReactNode
}

export const Footer: React.FC<IFooterProps> = ({ children }) => {

  const inset = useSafeAreaInsets();

  return(
  <>
    <View style={{...styles.footerContainer, paddingBottom: inset.bottom + 16}}>
      {children}
    </View>
  </>);
}

