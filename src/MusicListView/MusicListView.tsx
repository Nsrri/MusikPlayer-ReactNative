import React from 'react';
import { View, Text, FlatList } from 'react-native'
import { MusicListViewProps } from './MusicListView.interface';
import { ListItemProps } from '../components/ListItem/ListItem.interface';
import { ListItem } from '../components/ListItem/ListItem';
import { styles } from './MusicListView.styles';
import { color } from '@rneui/base';

export const MusicListView = ({ listItems }: MusicListViewProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={listItems}
                renderItem={({ item }) =>
                    <ListItem {...item}/>
                }
                keyExtractor={(item, index) => item.songsName + index  }
                ListHeaderComponent={() => <Text style={{color: 'white'}}>{'Songs'}</Text> }
            />

        </View>
    )
}
