import { View, Text } from 'react-native'
import React from 'react'
import { StyleHome } from './StyleHome'
import { ScrollView } from 'react-native-gesture-handler'
import IconTitle from './components/IconTitle'

export default function TitleHome() {
    return (
        <View style={StyleHome.cTitle}>
            <View>
                <Text style={StyleHome.title_1}>Good Morning,</Text>
                <Text style={StyleHome.title_2}>Sahara!</Text>
            </View>
            <View>
                <Text style={StyleHome.title_3}>How Do You Feel Today?</Text>
                <ScrollView
                    horizontal
                >
                    <IconTitle />
                    <IconTitle />
                    <IconTitle />
                    <IconTitle />
                    <IconTitle />
                    <IconTitle />
                </ScrollView>
            </View>
        </View>
    )
}