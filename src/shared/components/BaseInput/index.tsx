import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './style';

interface IBaseInputProps {
    children?: React.ReactNode;
    label?: string;
    asBotton?: boolean;
    onPress?: () => void;
}


export const BaseInput: React.FC<IBaseInputProps> = ({ children, label, asBotton, onPress }) => {
    return (
        <>
          <View style={styles.baseContainer}>
             <Text style={styles.label}>{label}</Text>
             {
                asBotton ? (
                    <Pressable 
                       onPress={onPress}
                       style={({ pressed }) => pressed ? styles.baseInputPressed : styles.baseInput}>
                        {children}
                    </Pressable>
                ) : (
                    <View style={styles.baseInput}>
                        {children}
                    </View>
                )
             }
          </View>
        </>
    );
}

