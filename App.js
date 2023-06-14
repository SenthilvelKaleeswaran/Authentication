import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView, Text, View } from 'react-native'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import Profile from './src/screens/Profile/Profile'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Login' component={Login}  options={{headerShown:false}} />
        <Stack.Screen name='Signup' component={Signup}  options={{headerShown:false}} />
        <Stack.Screen name='Profile' component={Profile}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App
