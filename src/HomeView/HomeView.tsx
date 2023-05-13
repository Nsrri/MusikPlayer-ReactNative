import React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, SectionList} from 'react-native'
import {HomeViewProps} from './HomeView.interface';
import NetworkRequests from '../../NetworkHandler/NetworkRequests';
import { Music } from '../../NetworkHandler/Data';

export const HomeView = () => {
    const [music, setMusic] = useState<Music>()

    useEffect(() => {
        const fetchMusic = async () =>  {
            const musicData = await NetworkRequests();
            setMusic(musicData)
        }
        fetchMusic();
    }, [])
    return (
        <View>
            {/* {music ?(
                <Text>{music.albums.items[9].data.name}</Text>
            ) : (
               <Text>Loading.....</Text>
            )} */}
            <Text style={{fontFamily: 'Nunito-BlackItalic'}}>Home</Text>
         
        </View>
    )
}
