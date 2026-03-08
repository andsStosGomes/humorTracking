import { theme } from '@/shared/themes/Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 12,
        backgroundColor:theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonText : {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.small,
        color: theme.colors.primaryText,
    }, 
});