import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import { MainStackParamList } from './TypeCheck'
import { ICONS, SCREENS } from '../constants/const'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home'
import Users from '../screens/users/Users'
import TabsIcons from '../components/TabsIcons'
import Camera from '../screens/cam/Camera'
import Message from '../screens/mess/Message'

const Stack = createStackNavigator<MainStackParamList>()

export default function MainNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={SCREENS.BUTTONTABS} component={MyTabs} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position:"absolute",
                    bottom: 0,
                    left:0,
                    right:0,
                    elevation:1
                }
            }}
        >
            <Tab.Screen name={SCREENS.HOME} component={Home} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.home} title={SCREENS.HOME}/>
                )
            }} />
            <Tab.Screen name={SCREENS.USER} component={Users} options={{
                tabBarLabel: SCREENS.USER,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.users} title={SCREENS.USER}/>
                )
            }} />
            <Tab.Screen name={SCREENS.CAM} component={Camera} options={{
                tabBarLabel: SCREENS.CAM,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.camera} title={SCREENS.CAM}/>
                )
            }} />
            <Tab.Screen name={SCREENS.MESS} component={Message} options={{
                tabBarLabel: SCREENS.MESS,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.message} title={SCREENS.MESS}/>
                )
            }} />
        </Tab.Navigator>
    );
}