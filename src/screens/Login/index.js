import React, { useState } from 'react'

import {
  Alert,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import AuthButton from '../../components/Auth/Button/AuthButton'
import {
  PasswordField,
  TextField,
} from '../../components/Auth/FormField/FormField'
import { login } from '../../../Api'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginButtonSubmit = async () => {
    console.log(email, password)

    const response = await login({ email, password })
    console.log(response)

    if (response.message === 'success') navigation.navigate('Profile')
    else Alert.alert(response.message)
  }

  const handleEmailChange = text => {
    setEmail(text)
  }

  const handlePasswordChange = text => {
    setPassword(text)
  }
  const handleSignUpClick = () => {
    navigation.navigate('Signup')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerHeaderText}>Log In</Text>
        </View>

        <View style={styles.containerBody}>
          <TextField
            label="Your Email"
            placeHolder="email"
            value={email}
            onValueChange={handleEmailChange}
          />
          <PasswordField
            label="Password"
            placeHolder="password"
            value={password}
            onValueChange={handlePasswordChange}
          />

          <Text style={styles.textForgetPassword}>Forget Password?</Text>

          <AuthButton text="Log In" handleOnPress={handleLoginButtonSubmit} />

          <View style={styles.accountSetup}>
            <View style={styles.signupNavigator}>
              <Text style={[styles.textDontHave, styles.text]}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={handleSignUpClick}>
                <Text
                  style={[
                    styles.textDontHave,
                    styles.text,
                    styles.signupNavigatorText,
                  ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
              <Text style={[styles.textDontHave, styles.text]}>
                Or Login with
              </Text>
              <View style={styles.line}></View>
            </View>

            <View style={styles.accounts}>
              <Image
                style={styles.accountImages}
                source={require('../../../Assets/Google.png')}
              />
              <Image
                style={styles.accountImages}
                source={require('../../../Assets/FaceBook.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  signupNavigator: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  signupNavigatorText: {
    color: '#3D5CFF',
  },

  container: {
    flexDirection: 'column',
    backgroundColor: '#F0F0F2',
  },

  containerHeader: {
    flexDirection: 'column',
    marginTop: 80,
    marginBottom: 10,
  },

  text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 0.5,
    lineHeight: 21,
  },

  containerHeaderText: {
    fontFamily: 'poppins',
    color: '#1F1F39',
    fontSize: 32,
    lineHeight: 48,
    fontWeight: '800',
    paddingLeft: 24,
  },

  containerBody: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 25,
  },

  textForgetPassword: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'right',
    letterSpacing: 0.5,
    lineHeight: 21,
    color: '#858597',
    paddingRight: 18,
  },

  textDontHave: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0.5,
    lineHeight: 21,
    color: '#858597',
    padding: 14,
  },

  accounts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
    padding: 10,
  },

  accountSetup: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  accountImages: {
    height: 40,
    width: 40,
  },

  lineContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  line: {
    width: '25%',
    height: 1,
    backgroundColor: '#B8B8D2',
  },
})

export default Login
