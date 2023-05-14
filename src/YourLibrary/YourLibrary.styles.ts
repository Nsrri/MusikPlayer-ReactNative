import {StyleSheet} from 'react-native'
import {YourLibraryProps} from './YourLibrary.interface';
import { useContext } from 'react';
import { ThemeContext } from '../../Context-Store/Context';

const {theme} = useContext(ThemeContext)
export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:  theme === 'dark' ? '#000000'  : '#ffffff'
    },
    text:{
        color: theme === 'dark' ? '#ffffff'  : '#000000'
    }
})
