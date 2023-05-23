import { StyleSheet } from 'react-native'
import { SearchViewProps } from './SearchView.interface';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context-Store/Context';
import { ScreenHeight } from '@rneui/base';

export const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    searchBarContainer: {
        backgroundColor: 'black',
        padding: 2
    },
    inputContainerStyle: {
        borderRadius: 20,
        backgroundColor: '#ffffff'
    },
    input: {
        color: '#000000'
    }
})
