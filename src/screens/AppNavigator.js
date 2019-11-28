import React from 'react';
// import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InitialLoadingScreen from './initailLoadingScreen';
import NameScreen from './nameScreen';
import LevelOneScreen from './levelOneScreen';

const RootStack = createStackNavigator(
    {
        // Name: {
        //     screen: NameScreen,
        //     // navigationOptions: {
        //     //     header: null,
        //     // },
        // },
        LevelOne: {
            screen: LevelOneScreen,
            // navigationOptions: {
            //     header: null,
            // },
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
    // {
    //     defaultNavigationOptions: {
    //         headerTitle: 'Home'
    //     }
    // }
)

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            InitialLoading: InitialLoadingScreen,
            Root: RootStack
        },
        {
            initialRouteName: 'Root'
        }
    )
)


export default AppNavigator;