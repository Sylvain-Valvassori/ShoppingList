import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { Colors } from '../assets/variables';
//---------------------------------------------
import TinyLogoFacebook from '../assets/images/Facebook.svg';
import TinyLogoGoogle from '../assets/images/Google.svg';
import TinyLogoApple from '../assets/images/Apple.svg';


//*----------------------- Methodes -----------------------






//*----------------------- Component Button & Export ----------------------- 
export default function Button(props) {
    
  return (
    <>
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.container}>
        {/* tinyIcon */}
        <Text style={styles.text}>{props.title}</Text>
      </Text>
    </Pressable>
    </>
  );
}


//*----------------------- Style ----------------------- 
const styles = StyleSheet.create({ 
    button: {
      width: 240,
      height: 40,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.white,
      margin: 6,
    },
    container: {
      // backgroundColor: Colors.red,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    text: {
      flex: 3,
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: Colors.darkGrey70,
    },
    tinyLogo: {
      flex: 1,
      width: 30,
      height: 30,
      marginRight: 10,
    }
});

