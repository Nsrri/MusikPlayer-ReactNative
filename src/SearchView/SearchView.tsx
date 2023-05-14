import React, {useContext} from 'react';
import {View, Text} from 'react-native'
import {SearchViewProps} from './SearchView.interface';
import { styles } from './SearchView.styles';
import { ThemeContext } from '../../Context-Store/Context';

const {theme} = useContext(ThemeContext)
export const SearchView = () => {
    return (
        <View style = {styles.container}>
        <Text style={{color: theme === 'dark' ? '#ffffff'  : '#000000'}}>SearchView</Text>
        </View>
    )
}
