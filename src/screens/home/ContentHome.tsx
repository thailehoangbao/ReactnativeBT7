import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleHome } from './StyleHome'
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/const'

export default function ContentHome() {
    return (
        <View style={StyleHome.cContentHome}>
            <View style={StyleHome.cItemContent_1}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: FONTS.fontMedium, fontWeight: '700', color: COLORS.organblack, paddingBottom: SIZES.paddingSuperSmall }}>1 On 1 Sessions</Text>
                    <Text style={{ fontSize: FONTS.fontSmall }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <View style={{ paddingTop: SIZES.paddingSmall, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.primarycolor, fontSize: FONTS.fontNormal, fontWeight: '700' }}>Book Now</Text>
                        <Image source={ICONS.calendar} style={StyleHome.iconsCalendar} />
                    </View>
                </View>

                <View>
                    <Image source={ICONS.accountbox} style={{ width: 100, height: 100, tintColor: COLORS.primarycolor }} />
                </View>
            </View>

            <View style={StyleHome.cItemContent_2}>
                <View style={StyleHome.itemContent_2}>
                    <Image source={ICONS.journal}/>
                    <Text style={StyleHome.itemTextContent_2}>Jounal</Text>
                </View>

                <View style={[StyleHome.itemContent_2,{marginLeft:SIZES.marginSmall}]}>
                    <Image source={ICONS.library}/>
                    <Text style={StyleHome.itemTextContent_2}>Library</Text>
                </View>
            </View>

            <View style={StyleHome.cItemContent_3}>
                <Text style={StyleHome.itemTextContent_3}>
                    "Lorem ipsum dolor sit amet consec sa  tetur adipisicing elit."
                </Text>
                <Image source={ICONS.dots} style={StyleHome.iconContent_3}/>
            </View>

            <TouchableOpacity style={[StyleHome.cItemContent_4,{marginTop:SIZES.marginSmall}]}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: FONTS.fontMedium, fontWeight: '700', color: COLORS.white, paddingBottom: SIZES.paddingSuperSmall }}>1 On 1 Sessions</Text>
                    <Text style={{ fontSize: FONTS.fontSmall,color:COLORS.white }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <View style={{ paddingTop: SIZES.paddingSmall, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.white, fontSize: FONTS.fontNormal, fontWeight: '700' }}>Buy More</Text>
                        <Image source={ICONS.rightArrow} style={[StyleHome.iconsCalendar,{tintColor:COLORS.white}]} />
                    </View>
                    
                </View>

                <View>
                    <Image source={ICONS.lotus} style={{ width: 100, height: 100, tintColor: COLORS.subGreenColor }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}