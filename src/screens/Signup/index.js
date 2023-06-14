import React, { useState } from 'react'
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
// import CheckBox from '@react-native-community';
import CheckBox from '@react-native-community/checkbox'

import AuthButton from '../../components/Auth/Button/AuthButton'
import {
  PasswordField,
  TextField,
} from '../../components/Auth/FormField/FormField'

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleSignupButtonSubmit = () => {
    setOpenModal(true)
  }

  const handleCheckBoxChange = () => {
    setCheck(!check)
  }

  const handleModalOpen = () => {
    setOpenModal(false)
  }
  const handleLoginClick = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerHeader}>
          <Text style={styles.containerHeaderText}>Sign Up</Text>
          <Text style={[styles.text, styles.containerHeaderNote]}>
            Enter your details below & Sign up
          </Text>
        </View>

        <View style={styles.containerBody}>
          <TextField
            label="Your Email"
            placeHolder="email"
            value={email}
            onChangeText={setEmail}
          />
          <PasswordField
            label="Password"
            placeHolder="password"
            value={password}
            onChangeText={setPassword}
          />
          <AuthButton
            text="Create account"
            handleOnPress={handleSignupButtonSubmit}
          />

          <View style={styles.checkBoxContainer}>
            <CheckBox value={check} onValueChange={handleCheckBoxChange} />
            <Text style={[styles.text, styles.checkBoxText]}>
              By creating an account you have to agree with our terms and
              conditions
            </Text>
          </View>
          <View style={styles.loginNavigator}>
            <Text style={[styles.text, styles.textAlready]}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={styles.loginNavigatonTextContainer}
              onPress={handleLoginClick}>
              <Text style={[styles.loginNavigatorText, styles.text]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={handleModalOpen}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInnerContainer}>
            <Text style={styles.moddalText}>Sucessfully account created</Text>
            <AuthButton text="Done" handleOnPress={handleModalOpen} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  loginNavigator: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginNavigatorText: {
    color: '#3D5CFF',
  },

  container: {
    flexDirection: 'column',
    backgroundColor: '#F0F0F2',
  },

  containerHeader: {
    flexDirection: 'column',
    marginTop: 70,
    marginBottom: 10,
  },

  containerHeaderText: {
    fontFamily: 'poppins',
    color: '#1F1F39',
    fontSize: 32,
    lineHeight: 48,
    fontWeight: '800',
    paddingLeft: 24,
  },

  text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 0.5,
    lineHeight: 21,
  },

  moddalText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 0.5,
    lineHeight: 21,
  },

  containerHeaderNote: {
    paddingLeft: 26,
    color: '#B8B8D2',
    textAlign: 'left',
  },

  textAlready: {
    textAlign: 'right',
    color: '#858597',
    padding: 40,
  },

  containerBody: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 25,
  },

  checkBoxContainer: {
    flexDirection: 'row',
  },

  checkBoxText: {
    padding: 0,
  },

  modalContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: '100%',
    alignItems: 'center',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '90%',
    borderRadius: 10,
  },
})

export default Signup
