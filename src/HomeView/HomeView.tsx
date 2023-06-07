import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Music } from '../../NetworkHandler/Data';
import { styles } from './HomeView.styles';
import { ThemeContext } from '../../Context-Store/Context';
import { SearchView } from '../components/SearchView';
import { MusicListView } from '../MusicListView';
import { ListItemProps } from '../components/ListItem/ListItem.interface';
import { getAllTracks } from '../../NetworkHandler/NetworkRequests';


const DATA: [ListItemProps] = [
    {
        songName: 'abc',
        singerName: 'ala',
        publishedDate: '2023'
    },
    {
        songName: 'efg',
        singerName: 'aga',
        publishedDate: '2022'
    }

]

export const HomeView = () => {
    const [music, setMusic] = useState<Music>()
    const { theme } = useContext(ThemeContext)

    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
         {/* <TouchableOpacity
            onPress={() =>{ getAllTracks('selena gomez')
        
        }}
            >
                <Text style={{backgroundColor: 'white'}}>{'show the data'}</Text>
            </TouchableOpacity> */}
            <SearchView />
            <MusicListView listItems={DATA} />
            {/* <Text style={{ fontFamily: 'Nunito-BlackItalic', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Home</Text> */}

        </View>
    )
}
