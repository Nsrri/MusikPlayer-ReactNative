import React, { useContext } from 'react';
import { View, Text } from 'react-native'
import { RecentViewProps } from './RecentView.interface';
import { styles } from './RecentView.styles';
import { ThemeContext } from '../../Context-Store/Context';

export const RecentView = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#13131A' : '#EBEBFO' }]}>
            <Text style={{ color: theme === 'dark' ? '#F9F4F4' : 'black' }}>RecentView</Text>
        </View>
    )
}
