import {StyleSheet} from 'react-native'
import {PlayViewProps} from './PlayView.interface';

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545'
      
    },
    innerContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     alignContent: 'center',
     alignSelf: 'center',
     marginVertical: 50
    },
    Icon: {
        width: 350,
        height: 250,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
})
