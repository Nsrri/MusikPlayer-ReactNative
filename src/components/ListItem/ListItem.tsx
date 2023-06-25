import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ListItemProps } from './ListItem.interface';
import { styles } from './ListItem.styles';
import { Icon } from '../../components/icon';



export const ListItem = ({title, artist, link}: ListItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.songsInfoContainer}>
                <Image
                    source={{ uri: artist?.picture }
                    }
                    style={styles.Icon}
                />
                <SongsInfos title={title} artist={artist?.name} />
            </View>
            <Icon name={'chevron-right'} size={'small'} color={'#F9F4F4'} />
        </View>
    )
}

const SongsInfos = ({title, artist}: any) => {
    return (
        <View style={styles.songsInfo}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.name}>{artist}</Text>
        </View>
    )
}
