import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';


interface IHeaderProps {
    name?: string | undefined
}

export const Header: React.FC<IHeaderProps> = ({ name }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Olá, </Text>
                <Text style={styles.headerBoldText}>{!name ? "Seu nome é ?" : name}</Text>
            </View>
        </>
    );
}

