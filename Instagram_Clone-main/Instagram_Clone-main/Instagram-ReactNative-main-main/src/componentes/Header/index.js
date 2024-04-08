import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import firebase from '../../firebaseConnection';
export default function Header() {

 return (
   <View style={styles.container}>
        <TouchableOpacity onPress={() => firebase.auth().signOut()}>
            <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            />
        </TouchableOpacity>
    <View style={styles.iconsConatainer}>
        <TouchableOpacity>
        <Image
            source={require('../../../assets/like.png')}
            style={styles.coracao}
            />
        </TouchableOpacity>
        
      
        <TouchableOpacity>
            <Image
            source={require('../../../assets/direct.png')}
            style={styles.direct}
            />
        </TouchableOpacity>
        </View>
      
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        //width: '100%',
       // height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:20
       /* paddingHorizontal: 8,
        borderBottomWidth: 0.7,
        shadowColor: '#fff',
        elevation: 5,
        marginBottom:2,
        marginTop:30*/
    },

    iconsConatainer:{
        flexDirection:"row",

    },

    icons:{

    },
    logo:{
        width:150,
        height: 35
    },
    direct:{
        height: 40,
        width: 35,
        marginTop: 7,
        marginRight:15
    },

    coracao:{
        
         height: 35,
        width: 30,
        marginTop: 7,
        marginRight:-100,
        marginLeft:60
        }
       
    

    
  });