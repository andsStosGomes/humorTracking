import { StyleSheet } from 'react-native';

import { theme } from '@/shared/themes/Theme';

export const styles = StyleSheet.create({
    baseContainer: {
        flexDirection: 'column',
        gap: 8,
    },
    label: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.small,
        color: theme.colors.text,
    },
    baseInput: {
        backgroundColor: theme.colors.background,
        borderRadius: 8,
    },
        baseInputPressed: {
        backgroundColor: theme.colors.background,
        borderRadius: 8,
        color: '#9e0000',
        opacity: 0.4,
    },

});