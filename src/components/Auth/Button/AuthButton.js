import React from 'react'

import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    container: {

        display:'flex',
        alignItems:'center',
        padding:15,
        // backgroundColor:'black'
    },
    button:{
        
        padding:18,
        borderRadius:10,
        width:'100%',
        backgroundColor:'#3D5CFF',
    },
    buttonText: {

        fontFamily:'poppins',
        fontSize:20,
        fontWeight:'normal',       
        textAlign:'center',
        lineHeight:24,
        color:'white',

    }
  })

const AuthButton = ({text,handleOnPress}) => {

  return (

    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleOnPress} >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    </View>
    
  )
}

export default AuthButton
