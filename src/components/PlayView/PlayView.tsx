import React, { useContext } from 'react';
import { View, Text } from 'react-native'
import { ThemeContext } from '../../../Context-Store/Context';
import { styles } from './PlayView.styles';
import { Image } from '@rneui/base';
import { PlayViewProps } from './PlayView.interface';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export const PlayView = ({ navigation, route }) => {
    const { theme } = useContext(ThemeContext)
    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: route.params.title
            },
        )
    })
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            <View style={styles.innerContainer}>
                <Image
                    source={{ uri: route.params.song?.artist?.picture_big }
                    }
                    style={styles.Icon}
                />
            </View>

        </View>
    )
}
