import React, {useState, useEffect} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  KeyboardAvoidingView, 
  TextInput,
  Button,
  TouchableOpacity,
  Animated,
  AsyncStorage
} from 'react-native';
import api from '../service/api';

export default function Signup({ navigation }) {

    const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));

    useEffect(() => {
        Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
        }).start();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(function persistForm(){
      
    })

  async function handleSubmit(){
    const response = await api.post('/users', {
      email: email,
      nome: name,
      password: password,
      presenca: false,
      pontos: 0,
      tipo: 'aluno',
      foto_url: '1'
    })

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('nome', nome);

    navigation.navigate('Home');
  };

  async function handleBack(){
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      </View>
      <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { translateY: offset.y}
          ]
        }
      ]}>
        <Text style={styles.title}>Crie Sua Conta</Text>

        <TextInput 
        style={styles.input}
        autoCapitalize="words"
        autoCorrect={false}
        placeholder="Nome Completo"
        autoCorrect={false}
        valu={name}
        onChangeText={setName}
        />

        <TextInput 
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Seu E-mail"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        />

        <TextInput 
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="words"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={styles.submitText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCreate} onPress={handleBack}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    marginBottom: 30,
    justifyContent: 'center'
  },
  logo: {
    width: 155,
    height: 155
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 50,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  btnSubmit: {
    backgroundColor: '#E60B0B',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnCreate: {
    marginTop: 20
  }
});
