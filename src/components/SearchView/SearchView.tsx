import React, { useContext } from 'react';
import { View } from 'react-native'
import { styles } from './SearchView.styles';
import { ThemeContext } from '../../../Context-Store/Context';
import { SearchBar, ThemeProvider } from '@rneui/themed';


export const SearchView = ({updateSearch, handleCancel,updateValue, searchValue }: any) => {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
            <ThemeProvider >
                <SearchBar
                    placeholder='What do you want to listen to?'
                    onChangeText={updateValue} 
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
