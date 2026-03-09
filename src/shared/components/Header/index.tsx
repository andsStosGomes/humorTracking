import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/shared/themes/Theme';


interface IHeaderProps {
    name?: string | undefined;
    onLogout?: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ name, onLogout }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Text style={styles.headerText}>Olá, </Text>
                    <Text style={styles.headerBoldText}>{!name ? "Seu nome é ?" : name}</Text>
                </View>

                {name && (
                    <TouchableOpacity onPress={onLogout} style={{ marginTop: 4, marginLeft: 16 }}>
                        <MaterialIcons name="logout" size={16} color={theme.colors.error} />
                    </TouchableOpacity>
                )}
            </View>


        </>
    );
}

