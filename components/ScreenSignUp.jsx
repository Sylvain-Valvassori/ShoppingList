import React, { useState, useEffect } from 'react';
import Button from './Button';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Alert, TextInput,ImageBackground} from 'react-native';
//---------------------------------------------
import {Colors} from '../assets/variables';
import image from '../assets/images/BG.png';


//*----------------------- Component viewLogin ----------------------- 
function ScreenSignUp ({ navigation }){
  const [email, onChangeEmail] = React.useState(null);
  const [name, onChangeName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.navSetting}>
          <Text style={styles.title}>Sign up</Text>
        </View>

        <Text style={styles.text}>It looks like you don't have an account.
        We will create a new one.</Text>


        <TextInput
            style={styles.input}
            placeholderTextColor={Colors.white}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name"
        />           
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
            styles={{backgroundColor: Colors.darkGreen, color: Colors.white}}
            title={'Sign up'}
            onPress={() => navigation.navigate('Login')}
        />
        <Button title="Go to login" onPress={() => navigation.goBack()} />
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
      color: Colors.darkGrey,
      fontWeight: '700', 
      fontSize: 60,
      textAlign: 'center',
      marginBottom: 60,
    },
    text:{
      color: Colors.darkGrey,
      fontSize: 20,
      fontWeight: '600',
      marginTop: 80,
      marginBottom: 70,
      width: 240,
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
    }
    
  });


//*----------------------- Export ----------------------- 
export default ScreenSignUp;