import { View, Text } from 'react-native'
import React from 'react'
import { StyleComUser } from './StyleComUser'

export default function ItemUserActive() {
  return (
    <View  style={StyleComUser.cItem}>
      <Text style={StyleComUser.text}>Trending</Text>
    </View>
  )
}