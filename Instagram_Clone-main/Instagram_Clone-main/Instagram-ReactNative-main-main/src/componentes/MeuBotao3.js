import { TouchableOpacity, StyleSheet, Text} from "react-native";
import firebase from '../firebaseConnection';
import { useNavigation} from '@react-navigation/native'

export default function MeuBotao3(props){
    const email = props.email
    const navigation = useNavigation();

    async function recuperar() {
      
            if(email === ''){
             alert("Email não digitado", "Insira um endereço de email")
            }else {
              firebase.auth().sendPasswordResetEmail(email)
              .then(() => {
                alert("Email enviado", "Verifique sua caixa de entrada")
                navigation.replace('telaLogin')
              })
              .catch((error) => {
                if(error.code === 'auth/invalid-email'){
                  alert("Erro", `Email não cadastrado, Cadastre-se!`)
                }
              })
            }
          }
        

          return(

            <TouchableOpacity
             style={styles.button}
             onPress={() => recuperar()}
            >
                <Text style={styles.texto}> Recover </Text>
            </TouchableOpacity>
        );
    }
    
    


const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2584f4',
        width:'70%',
        height:40,
        borderRadius:2,
        justifyContent:'center',
        margin:20,
        marginBottom:25

    },
    texto:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:"center"
      
       
    }
})