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
} from 'react-native';

export default function Login({ navigation }) {

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20
    }).start();
  }, []);

  async function handleSubmit(){
    navigation.navigate('Home');
  };

  async function handleSignUp(){
    navigation.navigate('Signup');
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
      ]}
      >
        <TextInput 
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Seu E-mail"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput 
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="words"
        secureTextEntry={true}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCreate} onPress={handleSignUp}>
          <Text>Criar Conta</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  logo: {
    width: 155,
    height: 155
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
