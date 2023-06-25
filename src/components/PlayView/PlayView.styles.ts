import {StyleSheet} from 'react-native'
import {PlayViewProps} from './PlayView.interface';

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545',
        flexDirection: 'column',
        justifyContent: 'space-between'
      
    },
    innerContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     alignContent: 'center',
     alignSelf: 'center',
     marginTop: 50,
    },
    Icon: {
        width: 350,
        height: 250,
        borderWidth: 2,
        borderColor: '#F9F4F4',
    },
})
