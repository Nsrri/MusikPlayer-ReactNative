import { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { HomeViewProps } from './HomeView.interface';
import { ThemeContext } from '../../Context-Store/Context';


const {theme} = useContext(ThemeContext)
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme === 'dark' ? '#000000'  : '#ffffff'
    }
})
