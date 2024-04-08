
import { useEffect, useState } from 'react';
import firebase from './src/firebaseConnection'
import Rotas from './src/componentes/Rotas/Index';
import Entrou from './src/Telas/Entrou';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Telas/Home'

  export default function App() {

  
   /* const [user, setUser] = useState();
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setUser(user)
      })
    }, []);
  
    if (user) {
      return <Entrou></Entrou>;
    }
  
    return (
      <NavigationContainer>
        <Rotas></Rotas>
      </NavigationContainer>
    )*/

    return(
      <Home></Home>
    )
  }
  
  
