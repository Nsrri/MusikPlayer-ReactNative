import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native'
import { HomeViewProps } from './HomeView.interface';
import NetworkRequests, { getAlbums } from '../../NetworkHandler/NetworkRequests';
import { Music } from '../../NetworkHandler/Data';
import { styles } from './HomeView.styles';
import { ThemeContext } from '../../Context-Store/Context';
import { SearchView } from '../components/SearchView';
import { MusicListView } from '../MusicListView';
import { ListItemProps } from '../components/ListItem/ListItem.interface';
import { MusicListViewProps } from '../MusicListView/MusicListView.interface';


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

    // useEffect(() => {
    //     const fetchMusic = async () => {
    //         const musicData = await NetworkRequests();
    //         setMusic(musicData)
    //     }
    //     fetchMusic();
    // }, [])
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            {/* {music ?(
                <Text style={{color: theme === 'dark' ? '#ffffff'  : '#000000'}}>{music.albums.items[9].data.name}</Text>
            ) : (
               <Text>Loading.....</Text>
            )} */}
            {/* <TouchableOpacity
            onPress={() => getAlbums()}
            
            >
                <Text style={{backgroundColor: 'white'}}>{'show the data'}</Text>
            </TouchableOpacity> */}
            <SearchView />
            <MusicListView listItems={DATA} />
            {/* <Text style={{ fontFamily: 'Nunito-BlackItalic', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Home</Text> */}

        </View>
    )
}
