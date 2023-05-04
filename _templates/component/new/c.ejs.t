---
to: <%= root %>/<%= path %>/<%= name %>.tsx
---

import React from 'react';
import {View, Text} from 'react-native'
import {<%= name %>Props} from './<%= name %>.interface';

export const <%= name %> = () => {
    return (
        <View>
        <Text><%= name %></Text>
        </View>
    )
}
