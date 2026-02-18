import { theme } from '@/shared/themes/Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        padding: 16,
        gap : 6, 
    }, 
    headerText : {
        fontFamily: theme.fonts.family.regular,
        fontSize : theme.fonts.size.medium,

    }, 
    headerBoldText : {
        fontFamily: theme.fonts.family.bold,
        fontSize : theme.fonts.size.medium,  
        color : theme.colors.primary,
    }
});