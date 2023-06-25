import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Music } from '../../NetworkHandler/Data';
import { styles } from './HomeView.styles';
import { ThemeContext } from '../../Context-Store/Context';
import { SearchView } from '../components/SearchView';
import { MusicListView } from '../MusicListView';
import { ListItemProps } from '../components/ListItem/ListItem.interface';
import { SongInfo, getAllTracks } from '../../NetworkHandler/NetworkRequests';
import { useDebounce } from 'use-debounce';
import { useQuery } from 'react-query';

export const HomeView = () => {
    const { theme } = useContext(ThemeContext)
    const [searchValue, setValue] = useState('')
    const [debouncedSearchValue] = useDebounce(searchValue, 500)
    const [data, setData] = useState<SongInfo | undefined>([])
    useEffect(() => {
        if (debouncedSearchValue) {
            const fetchResult = async () => {
                setData(await getAllTracks(debouncedSearchValue));
            }
            fetchResult();

        }
    }, [debouncedSearchValue])


    const updateSearch = (e: any) => {
        const searchValue = e.target.value
        setValue(searchValue)
    }

    const handleCancel = () => {
        setValue('')
    }
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            <SearchView updateSearch={updateSearch} handleCancel={handleCancel} updateValue={setValue} searchValue={searchValue} />
            {data && (
                <MusicListView songInfo={data} />
            )}
        </View>
    )
}
