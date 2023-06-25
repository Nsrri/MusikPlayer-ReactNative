import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { SongModificationViewProps } from './SongModificationView.interface';
import { Icon } from '../components/icon';
import { styles } from './SongModificationView.styles';
import Slider from '@react-native-community/slider';

export const SongModificationView = () => {
    const [playMusic, setPlayMusic] = useState(false);
    return (
        <View style={styles.constainer} >
            <Slider
                style={[{ width: 350, height: 40, borderColor: '#F9F4F4' }, styles.slider]}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#F9F4F4"
                maximumTrackTintColor="#1F1F29"
            />
            <View style={styles.innerContainer}>
                <SongsAction onPress={() => { }} name='backward' />
                <SongsAction onPress={() => { }} name='play' />
                {/* <SongsAction onPress={() => {}} name='pause' /> */}
                <SongsAction onPress={() => { }} name='forward' />
            </View>
        </View>

    )
}

interface songsActionProps {
    onPress: () => void,
    name: string
}
const SongsAction = ({ onPress, name }: songsActionProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Icon name={name} size='medium' color='#ffffff' />
        </TouchableOpacity>
    )
}

