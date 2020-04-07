import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, SafeAreaView, View, TextInput, Dimensions, ScrollView, StyleSheet, Image, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,  withNavigation} from 'react-navigation';
import GeneralStatusBarColor from '../components/generalSatusBarColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import Ranking from './ranking';
import logo from '../../assets/logo.png';
import gustavo from '../../assets/gustavo.png';
import moment from 'moment';
import Home from './home';
import Profile from './profile';
import Salutation from '../components/salutation'
import { Button } from 'react-native-paper';

export default function EditProfile({navigation}) {

    const TabNavigator = createBottomTabNavigator({
        Profile: Profile,
        Home: Home,
        Ranking: Ranking
      });
      createAppContainer(TabNavigator);

    function handleNavigate() {
        navigation.navigate('Profile');
      }

  return(
    <View style={styles.container}>
      <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content"/>
        <View style={styles.logoContainer}>

            <View style={styles.titleContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => handleNavigate()} style={styles.button}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            
            <Text style={styles.title}>Editar Conta</Text>
            
          </View>

          
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={gustavo}></Image>
            
            
          </View>
          
        </View>
        <ScrollView>
        <View style={styles.formContainer}>
            <Text style={styles.textForm}>E-mail</Text>
            <TextInput 
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Seu E-mail"
                autoCorrect={false}
                defaultValue={'gustavo@gmail.com'}
                onChangeText={()=> {}}
            />

            <Text style={styles.textForm}>Nome </Text>
            <TextInput 
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Seu E-mail"
                autoCorrect={false}
                defaultValue={'Gustavo Braz'}
                onChangeText={()=> {}}
            />

            <Text style={styles.textForm}>Telefone</Text>
            <TextInput 
                style={styles.input}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Telefone"
                autoCorrect={false}
                onChangeText={()=> {}}
            />

            <TouchableOpacity onPress={() => handleNavigate()} style={styles.btnSubmit}>
                <Text style={styles.submitText}>Salvar</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    )

}
const windowWidth = Dimensions.get('window').width;

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
    height: 150,
    width: 150,
    marginTop: 20,
    marginBottom: 35

  },
  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
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
    width: '65%'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },
  avatarContainer: {
    alignSelf: 'center',
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
  buttonContainer: {
    marginTop: 5,
    width: '30%',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  button: {
    height: 20,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
    formContainer: {
        alignItems: 'center',

    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 3,
        padding: 10,
        borderColor: '#DDD',
        borderBottomWidth: 3,
        marginBottom: 30
    },
    textForm: {
        color: '#9facbd',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginStart: 20,
        marginTop: 20
    },
    btnSubmit: {
        backgroundColor: '#E60B0B',
        width: '50%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 30
      },
      submitText: {
        color: '#FFF',
        fontSize: 18
      },
});

