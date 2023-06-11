import React,{useContext} from 'react';
import {View, Text} from 'react-native'
import { ThemeContext } from '../../../Context-Store/Context';
import { styles } from './PlayView.styles';
import { Image } from '@rneui/base';
import { PlayViewProps } from './PlayView.interface';

export const PlayView = ({song, title}: PlayViewProps) => {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
        <Image
         source={{ uri: song?.artist?.picture_big }
        }
        style={styles.Icon}
         />
        </View>
    )
}
