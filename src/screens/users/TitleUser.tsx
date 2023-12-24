import { View, Text } from 'react-native'
import React from 'react'
import { StyleUser } from './StyleUser'

export default function TitleUser() {
    return (
        <View style={StyleUser.cTitle}>
            <Text style={StyleUser.title}>Wellness Hub</Text>
        </View>
    )
}