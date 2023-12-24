import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, ICONS, SIZES } from '../../../constants/const'
import { style } from '../../../components/StyleComponents'
import { StyleComUser } from './StyleComUser'


export default function BoxChat() {
    return (
        <View style={StyleComUser.cBoxChat}>
            <View>
                <Image source={ICONS.avatar} style={style.avatarHome} />
            </View>
            <View style={{ paddingLeft: SIZES.paddingSmall }}>
                <View style={{ flexDirection: 'row', paddingBottom: SIZES.paddingSuperSmall }}>
                    <Text style={{ color: COLORS.organblack, fontWeight: '500', fontSize: FONTS.fontSemiSmall }}>Hello Bao,</Text>
                    <Text style={{ fontWeight: '300', fontSize: FONTS.fontSmall }}> . Just Now</Text>
                </View>
                <View >
                    <Text style={{ flex: 1, color: COLORS.colorTextBoxChat, fontSize: FONTS.fontSmall, fontWeight: '400' }}>Lorem ipsum dolor sit amet consectetur adipisicing.sum dolor sit amet consectetur adipisicing</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingTop:SIZES.paddingMedium }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={ICONS.like} style={[StyleComUser.iconsBoxChat, StyleComUser.iconsBoxChatActive]} />
                        <Text style={{ marginLeft: 5, color: COLORS.backGray, fontSize: FONTS.fontSmall }}>2</Text>
                        <Image source={ICONS.message} style={[{ marginLeft: SIZES.marginSmall }, StyleComUser.iconsBoxChat]} />
                    </View>
                    <Image source={ICONS.share} style={StyleComUser.iconsBoxChat} />
                </View>
            </View>
        </View>
    )
}