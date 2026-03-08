import { theme } from '@/shared/themes/Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container : { 
        flex: 1,       
        gap: 12,
    },
    homeFooterContainer :{
        gap: 12,
    },
    footerTitle : {
      fontFamily: theme.fonts.family.regular,
      fontSize : theme.fonts.size.small,
      color : theme.colors.text,
      textAlign: 'center',
    }, 
    footerInput : {
        fontFamily: theme.fonts.family.regular,
        fontSize : theme.fonts.size.small,
        padding: 12,
    },
    SetUserNameInput : {},
});