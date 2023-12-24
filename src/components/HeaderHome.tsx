import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../constants/const'
import { style } from './StyleComponents'


export default function HeaderHome() {
    return (
        <View style={style.cHeaderHome}>
            <View style={style.bgAvatar}>
                <Image source={ICONS.avatar} style={style.avatarHome}/>
            </View>

            <View style={style.cRingHome}>
                <View style={style.cNumRingHome}>
                    <Text style={style.numRingHome}>3</Text>
                </View>
                <Image source={ICONS.ring} style={style.cRingHome}/>
            </View>
        </View>
    )
}