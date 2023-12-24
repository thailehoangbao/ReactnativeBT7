import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleComCam } from './StyleComCam'
import { COLORS, FONTS, ICONS, SIZES } from '../../../constants/const'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ItemsCam() {
    return (
        <View style={StyleComCam.cItemCam}>
            <View style={StyleComCam.cHeaderItem}>
                <View style={StyleComCam.ciconAvatarItem}>
                    <Image source={ICONS.avatar} style={StyleComCam.iconAvatarItem} />
                </View>
                <View style={{ flex: 1, paddingLeft: SIZES.paddingSmall }}>
                    <Text style={{ fontWeight: '700', fontSize: FONTS.fontSemiSmall, color: COLORS.organblack }}>Sahana V</Text>
                    <Text style={{ fontWeight: '400', fontSize: FONTS.fontSmall, color: COLORS.organblack }}>Lorem ipsum dolor sit asda </Text>
                </View>
            </View>

            <View style={StyleComCam.line}></View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ICONS.calendar} style={{ tintColor: COLORS.backGray }} />
                    <Text style={{ fontWeight: '500', marginLeft: 5 }}>31st March '22</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SIZES.marginSmall }}>
                    <Image source={ICONS.clock} style={{ tintColor: COLORS.backGray }} />
                    <Text style={{ fontWeight: '500', marginLeft: 5 }}>7:30PM - 8:30PM</Text>
                </View>


            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:SIZES.paddingSmall}}>
                <TouchableOpacity style={StyleComCam.btnItemActive}>
                    <Text style={StyleComCam.btnTextActive}>Reschedule</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StyleComCam.btnItemUnActive}>
                    <Text style={StyleComCam.btnTextUnActive}>Join Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}