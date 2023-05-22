import React from 'react';
import { View, Text, Image} from 'react-native'
import { ListItemProps } from './ListItem.interface';
import { styles } from './ListItem.styles';
import {Icon} from '../../components/icon';


export const ListItem = ({ image,songsName, singerName, publishedDate  }: ListItemProps) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }
                }
            />
            <SongsInfos songsName={songsName} singerName={singerName} publishedDate={publishedDate}/>
            <Icon name={'chevron-right'} size={'small'} color={'white'} />

        </View>
    )
}

const SongsInfos = ({songsName, singerName, publishedDate}: ListItemProps) => {
  return (
    <View>
        <Text style={styles.name}>{songsName}</Text>
        <Text style={styles.name}>{singerName}</Text>
        <Text style={styles.name}>{publishedDate}</Text>
    </View>
  )
}
