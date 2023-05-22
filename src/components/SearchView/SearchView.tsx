import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native'
import { SearchViewProps } from './SearchView.interface';
import { styles } from './SearchView.styles';
import { ThemeContext } from '../../../Context-Store/Context';
import { ListItem } from '@rneui/themed';
import { SearchBar, ThemeProvider } from '@rneui/themed';

export const SearchView = () => {

    const { theme } = useContext(ThemeContext)
    const [value, setValue] = useState("")
    const updateSearch = (text) => {
        setValue(text)
    }
    const handleCancel = () => {
        setValue('')
    }
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            <ThemeProvider >
                <SearchBar
                    placeholder='What do you want to listen to?'
                    onChange={updateSearch}
                    value={value}
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
                />
            </ThemeProvider>
        </View>
    )
}
