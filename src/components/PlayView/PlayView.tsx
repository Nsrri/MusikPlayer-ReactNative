import React,{useContext} from 'react';
import {View, Text} from 'react-native'
import { ThemeContext } from '../../../Context-Store/Context';
import { styles } from './PlayView.styles';

export const PlayView = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
        <Text style={{color:'#ffffff'}}>PlayView</Text>
        </View>
    )
}
