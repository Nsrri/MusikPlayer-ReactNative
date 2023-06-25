import {StyleSheet} from 'react-native'
import {SongModificationViewProps} from './SongModificationView.interface';

export const  styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginBottom: 70,
    },
    
    constainer: {
     flex: 1,
     justifyContent: 'space-evenly',
     marginTop: 50,
     flexDirection: 'column',
     alignSelf: 'center',
     alignItems: 'center',
     alignContent: 'center',
    },

    slider: {
        marginTop: 40,
    }
})