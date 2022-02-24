import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//---------------------------------------------
import ScreenLogin from './components/ScreenLogin';
import ScreenSignUp from './components/ScreenSignUp';


//*----------------------- Const----------------------- 
const Stack = createNativeStackNavigator();


//*----------------------- App ----------------------- 
const App = () => {

    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login"  component={ScreenLogin} />
            <Stack.Screen name="SignUp" component={ScreenSignUp}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}


//*----------------------- Style ----------------------- 
//*----------------------- Export ----------------------- 
export default App;



