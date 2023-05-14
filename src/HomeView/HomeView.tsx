import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import {View, Text, SectionList} from 'react-native'
import {HomeViewProps} from './HomeView.interface';
import NetworkRequests from '../../NetworkHandler/NetworkRequests';
import { Music } from '../../NetworkHandler/Data';
import { styles } from './HomeView.styles';
import { ThemeContext } from '../../Context-Store/Context';

export const HomeView = () => {
    const [music, setMusic] = useState<Music>()
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        const fetchMusic = async () =>  {
            const musicData = await NetworkRequests();
            setMusic(musicData)
        }
        fetchMusic();
    }, [])
    return (
        <View style={styles.container}>
            {/* {music ?(
                <Text style={{color: theme === 'dark' ? '#ffffff'  : '#000000'}}>{music.albums.items[9].data.name}</Text>
            ) : (
               <Text>Loading.....</Text>
            )} */}
            <Text style={{fontFamily: 'Nunito-BlackItalic', color: theme === 'dark' ? '#ffffff'  : '#000000'}}>Home</Text>
         
        </View>
    )
}
