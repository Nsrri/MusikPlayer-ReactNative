import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from '../components/ListItem/ListItem';
import { styles } from './MusicListView.styles';
import {  useNavigation } from '@react-navigation/native';
import { SongInfo } from '../../NetworkHandler/NetworkRequests';
import { MusicListViewProps } from './MusicListView.interface';
export const MusicListView = ({ songInfo }: MusicListViewProps) => {
    
    const navigation = useNavigation();
    return (
            <View style={styles.container}>
                <FlatList
                    data={songInfo}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PlayView')
                                 
                            }}
                        >
                            <ListItem title={item?.title} artist={item?.artist} link={item?.link} />
                        </TouchableOpacity>

                    }
                    keyExtractor={(item, index) => item?.title + index}
                    ListHeaderComponent={() => <Text style={styles.headerStyle}>{'Playlist'}</Text>}
                />

            </View>

    )
}
