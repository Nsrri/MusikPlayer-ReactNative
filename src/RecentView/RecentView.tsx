import React, {useContext} from 'react';
import {View, Text} from 'react-native'
import {RecentViewProps} from './RecentView.interface';
import { styles } from './RecentView.styles';
import { ThemeContext } from '../../Context-Store/Context';

export const RecentView = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={styles.container}>
        <Text style={{color: theme  === 'dark' ? 'white' : 'black'}}>RecentView</Text>
        </View>
    )
}
