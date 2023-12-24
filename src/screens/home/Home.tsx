import { View, Text } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/HeaderHome'
import TitleHome from './TitleHome'
import ContentHome from './ContentHome'
import { COLORS } from '../../constants/const'
import { ScrollView } from 'react-native-gesture-handler'

export default function Home() {
    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <HeaderHome />
            <ScrollView contentContainerStyle={{paddingBottom:150}}>
                <TitleHome />
                <ContentHome />
            </ScrollView>
        </View>
    )
}