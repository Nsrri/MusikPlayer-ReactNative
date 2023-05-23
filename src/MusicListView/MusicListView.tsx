import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { MusicListViewProps } from './MusicListView.interface';
import { ListItemProps } from '../components/ListItem/ListItem.interface';
import { ListItem } from '../components/ListItem/ListItem';
import { styles } from './MusicListView.styles';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { PlayView } from '../components/PlayView';
export const MusicListView = ({ listItems }: MusicListViewProps) => {
    const navigation = useNavigation();
    return (
            <View>
                <FlatList
                    data={listItems}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                // navigation.navigate('PlayView')
                            }}
                        >
                            <ListItem {...item} />
                        </TouchableOpacity>

                    }
                    keyExtractor={(item, index) => item.AlbumName + index}
                    ListHeaderComponent={() => <Text style={styles.headerStyle}>{'Albums'}</Text>}
                />

            </View>

    )
}
