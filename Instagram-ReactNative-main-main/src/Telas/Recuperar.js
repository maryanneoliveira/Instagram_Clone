import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../componentes/Logo';
import MeuBotao3 from '../componentes/MeuBotao3'
import { useState } from 'react';
import { useNavigation} from '@react-navigation/native'

export default function Recuperar() {

  const[email,setEmail]= useState('');
  const navigation = useNavigation();
 
  return (
    
    <View style={styles.container}>
        <Logo></Logo>

        <Text style={styles.texto1}>Problemas para se conectar? </Text>
        <Text style={styles.texto2}>{'Insira o seu nome de usuário, email ou telefone e enviaremos um link para recuperação de sua conta'} 
            </Text>
      
      <TextInput style={[styles.textInput,{marginTop:12}]} placeholder=' Phone number,username or email' placeholderTextColor={'#fff'} color={'#fff'}
      onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <MeuBotao3 email={email}/>
  

      <View style={styles.linha}>

      <TouchableOpacity onPress={() => navigation.replace('telaLogin')}> 
      <Text style={styles.texto4}> voltar a tela de login </Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:'70%',
    borderWidth: 0.2,
    borderColor:'#fff',
    height:45,
    padding:6,
    borderRadius:4,
    backgroundColor:'#262626',
   // tintColor:'#fff',
   
  
  },
  texto1:{
    fontSize:20,
    fontWeight:"bold",
    color:"#fff",
    marginTop:-20
    
  },

  texto2:{
    width: '60%',
    fontSize:13,
    fontWeight:'bold',
    color:"#2584f4",
    marginTop:20,
    marginBottom:20,
   alignItems:'center',
   textAlign:'center'
  },

  linha:{
    backgroundColor:'#fff',
    width:340,
    height:0.5,
    marginTop:220
  },
  texto4:{
    fontSize:12,
    fontWeight:'bold',
    color:"#2584f4",
    marginTop:-30,
   alignItems:'center',
   marginLeft:110
  },

});
