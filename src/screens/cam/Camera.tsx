import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/HeaderHome'
import { StyleCam } from './StyleCam'
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/const'
import { ScrollView } from 'react-native-gesture-handler'
import ItemsCam from './Components/ItemsCam'

export default function Camera() {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <HeaderHome />
      <View style={{ padding: SIZES.paddingSmall }}>
        <View style={StyleCam.cItemContent_1}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: FONTS.fontMedium, fontWeight: '800', color: COLORS.organblack, paddingBottom: SIZES.paddingSuperSmall }}>Upcoming Session</Text>
            <Text style={{ fontSize: FONTS.fontSmall }}>Lorem, ipsum dolor sit amet </Text>
            <Text style={{ fontSize: FONTS.fontSemiSmall, fontWeight: '600', paddingTop: 5 }}>7:30 PM - 8:30 PM </Text>
            <View style={{ paddingTop: SIZES.paddingSmall, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: COLORS.primarycolor, fontSize: FONTS.fontNormal, fontWeight: '700' }}>Join Now</Text>
              <Image source={ICONS.playcircle} style={StyleCam.iconsYoutube} />
            </View>
          </View>
        </View>

      </View>

      <ScrollView
        contentContainerStyle={{paddingBottom:300}}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: SIZES.paddingSmall }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5, flex: 1 }}>
            <Text style={{ fontSize: FONTS.fontMedium, fontWeight: '700', color: COLORS.organblack }}>All Sessions</Text>
            <Image source={ICONS.arrowdown} style={{ tintColor: COLORS.backGray }} />
          </View>

          <View style={{ position: 'relative' }}>
            <Image source={ICONS.dropup} style={{ tintColor: COLORS.backGray, position: 'absolute', left: -40, bottom: -14 }} />
            <Image source={ICONS.dropdown} style={{ tintColor: COLORS.backGray, position: 'absolute', left: -40, top: -14 }} />
          </View>

        </View>

        <View style={{padding:SIZES.paddingMedium}}>
          <ItemsCam />
          <ItemsCam />
          <ItemsCam />
          <ItemsCam />
          <ItemsCam />

        </View>
      </ScrollView>
    </View>
  )
}