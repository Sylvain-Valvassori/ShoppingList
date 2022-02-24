import React, { useState, useEffect } from 'react';
import Button from './Button';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Alert, TextInput,ImageBackground} from 'react-native';
//---------------------------------------------
import {Colors} from '../assets/variables';
import image from '../assets/images/BG.png';


//*----------------------- Const ----------------------- 


//*----------------------- Component ScreenLogin ----------------------- 
export default function ScreenLogin ({ navigation }){
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Hello</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.white}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.password]}
          placeholderTextColor={Colors.white}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
        <Button
          title='Continue'
          onPress={() => navigation.navigate('SignUp')}
        />
        <Text style={styles.or}>or</Text>


        <Button
          icon='TinyLogoFacebook'
          title='Continue with Facebook'
          onPress={() => Alert.alert('Continue with Facebook')}
        />
        <Button
          icon='TinyLogoGoogle'
          title='Continue with Google'
          onPress={() => Alert.alert('Continue with Google')}
        />
        <Button
          icon='TinyLogoApple'
          title='Continue with Apple'
          onPress={() => Alert.alert('Continue with Apple')}
        />

        <View>
          <View style={styles.containerText}>
            <Text style={styles.text}>Don’t have an account?</Text>
            <Text style={[styles.text,styles.textBleu]} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
          </View>
          
          <Text style={[styles.text,styles.textBleu, {marginTop: 10}]} onPress={() => Alert.alert('An email was send to your address')}>Forgot your password?</Text>
        </View>
        



        <StatusBar style="auto" translucent={true} />
      </ImageBackground>
    </View>
  );
}


//*----------------------- Style ----------------------- 
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    title: {
      color: Colors.white,
      fontWeight: 'bold', 
      fontSize: 80,
      textAlign: 'center',
      marginBottom: 60,
    },
    or:{
      color: Colors.white,
      fontSize: 15,
      fontWeight: '400',
      margin: 20,
    },
    input: {
      height: 60,
      width: 240,
      margin: 12,
      borderBottomWidth: 2,
      borderColor: Colors.darkGreen,
      padding: 10,
      color: Colors.white,
      fontSize: 15,
      fontWeight: '500' ,
    },
    password: {
      marginBottom: 60,
    },
    containerText: {
      marginTop: 10,
      width: 240,
      flexDirection: 'row'
    },
    text: {
      color: Colors.white,
      fontSize: 14,
      fontWeight: '600',
      marginRight: 20
    },
    textBleu: {
      color: Colors.darkGreen,
      marginLeft: 0,
    }
    
  });


//*----------------------- Export ----------------------- 
  // export default ScreenLogin;