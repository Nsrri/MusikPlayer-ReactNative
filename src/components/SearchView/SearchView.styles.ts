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
        backgroundColor: '101014',
        padding: 2
    },
    inputContainerStyle: {
        borderRadius: 20,
        backgroundColor: '#F9F4F4'
    },
    input: {
        color: '#101014'
    }
})
