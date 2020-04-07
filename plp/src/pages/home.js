import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, SafeAreaView, View, ScrollView, StyleSheet, Image, AsyncStorage, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import GeneralStatusBarColor from '../components/generalSatusBarColor';
import Ranking from './ranking';
import logo from '../../assets/logo_branca.png';
import moment from 'moment';
import users from '../user';
import TrainingList from '../components/trainingList';

export default function Home() {

  
  const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Ranking: Ranking,
    
  });
  createAppContainer(TabNavigator);
  
  return(
    <View style={styles.container}>
        <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content"/>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        
        <Text style={styles.title}>Treino de Hoje 27/03</Text>

        
        <TrainingList/>
        

    </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    backgroundColor: '#000'
  },
  logo: {
    height: 40,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20
  }
});

