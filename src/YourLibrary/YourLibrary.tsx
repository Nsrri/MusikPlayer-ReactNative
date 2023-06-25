import React, { useContext } from 'react';
import { View, Text } from 'react-native'
import { YourLibraryProps } from './YourLibrary.interface';
import { styles } from './YourLibrary.styles';
import { ThemeContext } from '../../Context-Store/Context';


export const YourLibrary = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#13131A' : '#EBEBFO'  }]}>
            <Text style={{ color: theme === 'dark' ? '#F9F4F4' : 'black' }}>YourLibrary</Text>
        </View>
    )
}
