import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../../constants/const'
import { StyleComHome } from './StyleComHome'

export default function IconTitle() {
    return (
        <View>
            <View style={StyleComHome.ciconsTitleHome}>
                <Image source={ICONS.smile} style={StyleComHome.iconsTitleHome} />
            </View>
            <Text style={{paddingLeft:13}}>Happy</Text>
        </View>

    )
}