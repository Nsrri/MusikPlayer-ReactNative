import React from 'react';
import { View, Text, Image } from 'react-native'
import { ListItemProps } from './ListItem.interface';
import { styles } from './ListItem.styles';
import { Icon } from '../../components/icon';


export const ListItem = ({ image, AlbumName, singerName, publishedDate }: ListItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.songsInfoContainer}>
                <Image
                    source={{ uri: image }
                    }
                    style={styles.Icon}
                />
                <SongsInfos AlbumName={AlbumName} singerName={singerName} publishedDate={publishedDate} />
            </View>
            <Icon name={'chevron-right'} size={'small'} color={'#ffffff'} />

        </View>
    )
}

const SongsInfos = ({ AlbumName, singerName, publishedDate }: ListItemProps) => {
    return (
        <View style={styles.songsInfo}>
            <Text style={styles.name}>{AlbumName}</Text>
            <Text style={styles.name}>{singerName}</Text>
            <Text style={styles.name}>{publishedDate}</Text>
        </View>
    )
}
