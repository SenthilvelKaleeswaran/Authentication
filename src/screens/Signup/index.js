import React, { useState } from 'react';
import { Alert, Button, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
// import CheckBox from '@react-native-community';
import CheckBox from '@react-native-community/checkbox';

import AuthButton from '../../components/Auth/Button/AuthButton';
import { PasswordFormField, TextFormField } from '../../components/Auth/FormField/FormField';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [openModal,setOpenModal] = useState(false)

  const handleSignupButtonSubmit = () => {
    setOpenModal(true)
  };

  const handleCheckBoxChange = () => {
    setCheck(!check);
  };

  const handleModalOpen =() =>{

    setOpenModal(false)

  }

  return (
    <View style={styles.container}>  
       <ScrollView>
      <View style={styles.containerHeader}> 
        <Text style={styles.containerHeaderText}>Sign Up</Text>
        <Text style={[styles.text,styles.containerHeaderNote]}>Enter your details below & Sign up</Text>
      </View>

      <View style={styles.containerBody}>
        <TextFormField label="Your Email" placeHolder="email" value={email} onChangeText={setEmail} />
        <PasswordFormField label="Password" placeHolder="password" value={password} onChangeText={setPassword} />
        <AuthButton text="Create account" handleOnPress={handleSignupButtonSubmit} />
 
        <View style={styles.checkBoxContainer}>
          <CheckBox
            value={check}
            onValueChange={handleCheckBoxChange} 

          />
          <Text style={[styles.text,styles.checkBoxText]}>
            By creating an account you have to agree with our terms and conditions
          </Text>
        </View><Text style={[styles.text,styles.textAlready]}>Already have an account? Log in</Text>
      
      </View>

      </ScrollView>
      

        
      <Modal
        animationType='slide'
        transparent={true}
        visible={openModal}
        onRequestClose={handleModalOpen}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalInnerContainer}>
            <Text>Sucessfully account created</Text>
            <Button title='Done' onPress={handleModalOpen}/>
          </View>
        </View>

      </Modal>



    </View>
  );
};

const styles= StyleSheet.create({
  container : {

    flexDirection:'column',
    backgroundColor:'#F0F0F2',

  },

  containerHeader : {
 
    flexDirection: 'column',
    marginTop:70,
    marginBottom:10,
    
  },

  containerHeaderText : {

    fontFamily:'poppins',
    color:'#1F1F39',
    fontSize:32,
    lineHeight:48,
    fontWeight:'800', 
    paddingLeft:24,
    
  },
  
  text : {
    fontFamily:'Poppins',
    fontSize:16,
    fontWeight:'normal',       
    letterSpacing:0.5,
    lineHeight:21,
   
  },

  containerHeaderNote : {
    paddingLeft:26,
    color:'#B8B8D2',
    textAlign:'left',
    
  },

  textAlready:{

    textAlign:'center',
    color:'#858597',
    padding:40,
  },

  containerBody: {

    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'white',
    padding:16,
    paddingTop:25,

  },

  checkBoxContainer:{
    flexDirection:'row',
  },

  checkBoxText : {
    padding:0,

  },

  modalContainer : {
    backgroundColor:'grey',
    height:'100%',
    alignItems:'center',

  },
  modalInnerContainer:{

    backgroundColor:'white',
    height:'50%',
    width:'90%',


  }


})

export default Signup;
