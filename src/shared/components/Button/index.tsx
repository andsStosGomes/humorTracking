import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './style';


interface ButtonProps {
  title? : string;
  children?: React.ReactNode;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, children,onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
      ({
        ...styles.button,
        ...(pressed ? styles.buttonPressed : {})
      })}
    >
      {children}
      {!children && <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
}

