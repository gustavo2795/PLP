import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View, ScrollView, StyleSheet, Image, AsyncStorage, Text } from 'react-native';
import logo from '../../assets/logo_branca.png';
import GeneralStatusBarColor from '../components/generalSatusBarColor';
import ranking from '../../assets/ranking.png';
import rankingData from '../ranking';
import avatar from '../../assets/avatar.png';

export default function Schedules() {
  
  return(
    <View style={styles.container}>
      <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content"/>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>

      <Image style={styles.rankingImage} source={ranking}/>

        

    </View>
  )

};

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
  rankingImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20
  },
  list: {
    paddingHorizontal: 30,
    
  },
  containerList: {
    flexDirection: 'row',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    width: "80%",

  },
  avatar: {
    width:40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 50
  },
  name: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  pointsContainer: {
    width: '20%',

  },
  points: {
    marginTop: 15,
    marginLeft: 10
  }
});