import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Alert, SafeAreaView, View, Dimensions, ScrollView, StyleSheet, Image, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,  withNavigation} from 'react-navigation';
import GeneralStatusBarColor from '../components/generalSatusBarColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import Ranking from './ranking';

import gustavo from '../../assets/gustavo.png';
import moment from 'moment';
import Home from './home';

import { Button } from 'react-native-paper';

export default function Profile({navigation}) {

  const TabNavigator = createBottomTabNavigator({
    Profile: Profile,
    Home: Home,
    Ranking: Ranking
  });
  createAppContainer(TabNavigator);

  function handleNavigate() {
    navigation.navigate('EditProfile');
  };

  function handleLogout(){
    Alert.alert(
      'Sair',
      'Deseja mesmo sair da sua conta?',
      [
        {text: 'Não', onPress: () => console.log('nao'), style: 'cancel'},
        {text: 'Sim', onPress: () => navigation.navigate('Login')}
      ]
    )
    
  };

  function handleNothing(){
    Alert.alert(
      'OPS!',
      'Essa funcionalidade ainda não foi implementada!',
      [
        {text: 'OK', onPress: () => console.log('OK')}
      ]
    )
  };
  
  return(
    <View style={styles.container}>
      <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content"/>
        <View style={styles.logoContainer}>

          <View style={styles.titleContainer}> 
            <Text style={styles.title}>Minha Conta</Text>
            <TouchableOpacity onPress={() => handleNavigate()} style={styles.button}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          </View>

          
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={gustavo}></Image>
            <Text style={{color: '#FFF', fontWeight: 'bold', fontSize:15, marginLeft: 20}}>Gustavo Braz</Text>
            
          </View>
          
        </View>
        <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => handleNavigate()} style={styles.menuBoxFirst}>
                <Text style={styles.menuText}>Editar Perfil</Text>
                <Icon style={styles.menuIcon} name='chevron-right' size={15} color={'#c4c6c8'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNothing()} style={styles.menuBox}>
                <Text style={styles.menuText}>Pagar Mensalidade</Text>
                <Icon style={styles.menuIcon} name='chevron-right' size={15} color={'#c4c6c8'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate()} style={styles.menuBox}>
              <Text style={styles.menuText}>Confirmar Horário</Text>
              <Icon style={styles.menuIcon} name='chevron-right' size={15} color={'#c4c6c8'}/>
            </TouchableOpacity>
        </View>

        <View style={styles.supportMenuContainer}>
          <TouchableOpacity onPress={() => handleNothing()} style={styles.menuBoxFirst}>
              <Text style={styles.menuText}>Mudar Senha</Text>
              <Icon style={styles.menuIcon} name='chevron-right' size={15} color={'#c4c6c8'}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNothing()} style={styles.menuBox}>
              <Text style={styles.menuText}>Suporte</Text>
              <Icon style={styles.menuIcon} name='chevron-right' size={15} color={'#c4c6c8'}/>
          </TouchableOpacity>
        </View>

        <View style={styles.supportMenuContainer}>
          <TouchableOpacity onPress={() => handleLogout()} style={styles.menuBox}>
              <Text style={styles.menuTextLogout}>Sair</Text>
              <Icon style={styles.menuIcon} name='chevron-right' size={15} color={'#c4c6c8'}/>
          </TouchableOpacity>
        </View>
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
  avatar: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 80,
    width: 80,
    marginTop: 20,
    marginBottom: 20

  },
  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 20,
    width: '75%'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },
  avatarContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  nameContainer: {
    width: '60%'
  },
  salutation: {
    color: 'white',

  },
  name: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold'
  },
  iconContainer: {
    width: '20%'
  },
  icon: {
    color: 'white',
    width: 25
  },
  button: {
    marginTop: 5,
    height: 20,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: windowWidth - 280
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  menuContainer: {
    width: '100%',

  },
  menuBox: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 2,
    alignItems: 'center',
    borderColor: "#DDD",
  
  },
  menuBoxFirst: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 2,
    alignItems: 'center',
    borderColor: "#DDD",
    borderTopWidth: 5
  },
  menuText: {
    marginLeft: 20,
    width: '90%',
    fontSize: 17,
    fontWeight: 'bold'
  },
  menuTextLogout: {
    marginLeft: 20,
    width: '90%',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red'
  },
  supportMenuContainer: {
    borderBottomWidth: 5,
    borderColor: '#DDD'
  }
});

