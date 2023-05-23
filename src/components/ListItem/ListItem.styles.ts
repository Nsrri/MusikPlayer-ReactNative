import {StyleSheet} from 'react-native'
import {ListItemProps} from './ListItem.interface';

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#454545',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center'
    },
    name: {
        color: '#ffffff'
    },
    ItemSeperator: {
        backgroundColor: '#ffffff',
        height: 1
    },
    Icon: {
        width: 100,
        height: 80,
        borderWidth: 2,
        borderColor: '#ffffff'
       
    },
    songsInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    songsInfo: {
        margin: 7
    }
})
