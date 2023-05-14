import React, { useContext } from 'react';
import {View, Text} from 'react-native'
import {YourLibraryProps} from './YourLibrary.interface';
import { styles } from './YourLibrary.styles';
import { ThemeContext } from '../../Context-Store/Context';

const {theme} = useContext(ThemeContext)
export const YourLibrary = () => {
    return (
        <View style={styles.container}>
        <Text style={{color: theme === 'dark' ? '#ffffff'  : '#000000'}}>YourLibrary</Text>
        </View>
    )
}
