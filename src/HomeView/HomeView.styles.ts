import { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../Context-Store/Context';

export const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    headerStyle: {
        color: '#F9F4F4',
        fontFamily: 'Nunito-Bold',
        fontSize: 24,
        paddingLeft: 5
    }
})
