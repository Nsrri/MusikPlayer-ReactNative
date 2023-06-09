import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Music } from '../../NetworkHandler/Data';
import { styles } from './HomeView.styles';
import { ThemeContext } from '../../Context-Store/Context';
import { SearchView } from '../components/SearchView';
import { MusicListView } from '../MusicListView';
import { ListItemProps } from '../components/ListItem/ListItem.interface';
import { getAllTracks } from '../../NetworkHandler/NetworkRequests';
import { useDebounce } from 'use-debounce';
import { useQuery } from 'react-query';



export interface SongData {
    title: string;
    // password: string;
    // prevState: null
  }
  
  //...
export const HomeView = () => {
    const { theme } = useContext(ThemeContext)
    const [searchValue, setValue] = useState('')
    const [debouncedSearchValue] = useDebounce(searchValue, 500)
    const [data, setData] = useState<SongData | null>(null)
    useEffect( () => {
        if (debouncedSearchValue) {
            // const fetchData = async () => {
                 getAllTracks(debouncedSearchValue)
                 const fetchResult = async () => {
                    setData(await getAllTracks(debouncedSearchValue));
                 }
                
            // }
            fetchResult();
        
        }
    },[debouncedSearchValue])
    

    const updateSearch =  (e: any) => {
        const searchValue = e.target.value
        setValue(searchValue)
    }

    const handleCancel = () => {
        setValue('')
    }
    const DATA: [ListItemProps] = [
        {
            songName: data.title,
            singerName: 'ala',
            publishedDate: '2023'
        },
        {
            songName: 'efg',
            singerName: 'aga',
            publishedDate: '2022'
        }
    
    ]
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
         {/* <TouchableOpacity
            onPress={() =>{ getAllTracks('selena gomez')
        
        }}
            >
                <Text style={{backgroundColor: 'white'}}>{'show the data'}</Text>
            </TouchableOpacity> */}
         
         
             
            <SearchView updateSearch={updateSearch} handleCancel={handleCancel} updateValue={setValue} searchValue={searchValue} />
            <MusicListView listItems={DATA} />
            <Text style={{ fontFamily: 'Nunito-BlackItalic', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Home</Text>
  
        </View>
    )
}
