import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './pages/login';
import Home from './pages/home';
import Ranking from './pages/ranking'
import Signup from './pages/signup';
import Profile from './pages/profile';
import EditProfile from './pages/editProfile';
import Schedules from './pages/schedules';

const stackProfile = createStackNavigator({
    Profile:{
        screen: Profile,
        navigationOptions: {
            headerShown: false
        }
    },
    EditProfile:{
        screen: EditProfile,
        navigationOptions: {
            headerShown: false
            // headerTitle: 'Editar Conta',
            // headerTitleStyle: {
            //     color: '#FFF'
            // },
            // headerStyle:{
            //     backgroundColor: "#000",
            //     color: 'white'
            // },
            
        }
    }
})

const MainTabs = createMaterialBottomTabNavigator(
    {
        Treinos: {
            screen: Home,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                  <Icon name="futbol-o" size={20} color={focused ? '#E60B0B' : '#ddd'} />
                ),
            }),
        },
        Horários: {
            screen: Schedules,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                  <Icon name="clock-o" size={20} color={focused ? '#E60B0B' : '#ddd'} />
                ),
            }),
        },
        Ranking: {
            screen: Ranking,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                  <Icon name="list" size={20} color={focused ? '#E60B0B' : '#ddd'} />
                ),
            }),
        },
        Perfil: {
            screen: stackProfile,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                  <Icon name="user-o" size={20} color={focused ? '#E60B0B' : '#ddd'} />
                ),
            }),
        }
    },
    {
        barStyle: {
            backgroundColor: '#FFF',
        },
    },
);


const Routes = createSwitchNavigator(
    {
        Login,
        Signup,
        Home: MainTabs,
        Ranking,
        Profile,
        EditProfile,
        
    },
);


export default createAppContainer(Routes);