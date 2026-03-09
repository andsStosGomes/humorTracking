import { theme } from '@/shared/themes/Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
    },
    homeFooterContainer: {
        gap: 12,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    footerTitle: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.small,
        color: theme.colors.text,
        textAlign: 'center',
    },
    footerInput: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.small,
        padding: 12,
    },
    SetUserNameInput: {},
    emptyContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContentText: {
        fontFamily: theme.fonts.family.italic,
        fontSize: theme.fonts.size.medium,
        color: theme.colors.textPlaceholder,
        textAlign: 'center',
    },

});