import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { MusicListViewProps } from './MusicListView.interface';
import { ListItem } from '../components/ListItem/ListItem';
import { styles } from './MusicListView.styles';
import {  useNavigation } from '@react-navigation/native';
export const MusicListView = ({ listItems }: MusicListViewProps) => {
    const navigation = useNavigation();
    return (
            <View style={styles.container}>
                <FlatList
                    data={listItems}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PlayView')
                                
                            }}
                        >
                            <ListItem {...item} />
                        </TouchableOpacity>

                    }
                    keyExtractor={(item, index) => item.songName + index}
                    ListHeaderComponent={() => <Text style={styles.headerStyle}>{'Songs'}</Text>}
                />

            </View>

    )
}
