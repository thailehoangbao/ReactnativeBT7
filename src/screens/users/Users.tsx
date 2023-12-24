import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/HeaderHome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, ICONS, SIZES } from '../../constants/const'
import TitleUser from './TitleUser'
import ItemUserActive from './components/ItemUserActive'
import ItemUserUnActive from './components/ItemUserUnActive'
import BoxChat from './components/BoxChat'
import { StyleUser } from './StyleUser'


export default function Users() {
  return (
    <View style={{ backgroundColor: COLORS.white, position: 'relative', paddingBottom: 100 }}>
      <HeaderHome />
      <ScrollView contentContainerStyle={{ paddingBottom: SIZES.paddingLarge }}>
        <TitleUser />
        <ScrollView
          horizontal
          contentContainerStyle={{ padding: SIZES.paddingSmall }}
        >
          <ItemUserActive />
          <ItemUserUnActive />
          <ItemUserUnActive />
          <ItemUserUnActive />
          <ItemUserUnActive />

        </ScrollView>

        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />

      </ScrollView>
      <View style={StyleUser.cbtnWrite}>
        <TouchableOpacity style={StyleUser.btnWrite}>
          <Image source={ICONS.pen} style={{tintColor:COLORS.white}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}