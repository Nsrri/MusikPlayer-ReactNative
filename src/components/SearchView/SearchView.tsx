import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { styles } from './SearchView.styles';
import { ThemeContext } from '../../../Context-Store/Context';
import { SearchBar, ThemeProvider } from '@rneui/themed';
import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';
import { getAllTracks } from '../../../NetworkHandler/NetworkRequests';

export const SearchView = () => {
    const { theme } = useContext(ThemeContext)
    const [searchValue, setValue] = useState('')
    const [debouncedSearchValue] = useDebounce(searchValue, 500)

    useEffect(() => {
        if (debouncedSearchValue) {
            getAllTracks(debouncedSearchValue)
        }
    },[debouncedSearchValue])

    const updateSearch =  (e: any) => {
        const searchValue = e.target.value
        setValue(searchValue)
    }

    const handleCancel = () => {
        setValue('')
    }
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            <ThemeProvider >
                <SearchBar
                    placeholder='What do you want to listen to?'
                    onChangeText={setValue} 
                    value={searchValue}
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor='#000000'
                    clearIcon={{color: '#000000'}}
                    searchIcon={{color: '#000000'}}
                    showCancel
                    onCancel={handleCancel}
                    platform='ios'
                    cancelButtonTitle='cancel' 
                    onSubmitEditing={updateSearch}    
                />
            </ThemeProvider>
        </View>
    )
}
