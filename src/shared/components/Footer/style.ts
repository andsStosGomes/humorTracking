import { theme } from '@/shared/themes/Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    footerContainer : {
        padding: 16, 
        borderTopEndRadius: 20, 
        borderTopLeftRadius: 20,
        backgroundColor: theme.colors.paper, 
        ...theme.shadows.default,
    }, 
}); 