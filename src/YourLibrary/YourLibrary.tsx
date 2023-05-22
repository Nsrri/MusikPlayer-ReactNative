import React, { useContext } from 'react';
import { View, Text } from 'react-native'
import { YourLibraryProps } from './YourLibrary.interface';
import { styles } from './YourLibrary.styles';
import { ThemeContext } from '../../Context-Store/Context';


export const YourLibrary = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            <Text style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>YourLibrary</Text>
        </View>
    )
}
