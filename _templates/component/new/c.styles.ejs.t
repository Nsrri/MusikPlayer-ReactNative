---
to: <%= root %>/<%= path %>/<%= name %>.styles.ts
---


import {StyleSheet} from 'react-native'
import {<%= name %>Props} from './<%= name %>.interface';

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
