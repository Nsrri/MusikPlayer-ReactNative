import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { SongModificationViewProps } from './SongModificationView.interface';
import { Icon } from '../components/icon';
import { styles } from './SongModificationView.styles';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');
export const SongModificationView = ({ songPath }: SongModificationViewProps) => {
    const [playMusic, setPlayMusic] = useState(false);

    // initializing the song via the given url.
    const song = new Sound(songPath, "", (error) => {
        if (error) {
            console.log(`There is an error and the initialization failed due to this reason:`, error);
            return;
        }
        console.log(`Duration in seconds: ${song.getDuration()} and the number of channels: ${song.getNumberOfChannels()}`);
    })

    // set the default volume and release the reserved place by the song after the component got unmounted to pervent memeory leak.
    useEffect(() => {
        song.setVolume(1);
        return () => {
            song.release();
        };
    }, []);

    const playPause = () => {
        if (song.isPlaying()) {
            song.pause();
            setPlayMusic(false);
        } else {
            setPlayMusic(true);
            song.play(success => {
                if (success) {
                    console.log('Playing song is finished successfully');
                    setPlayMusic(false);
                } else
                    console.log('Playing song failed due to audio decoding error');
                console.log(songPath)
            }

            )
        }

    }


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
                <SongsAction onPress={playPause} name='play' />
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

