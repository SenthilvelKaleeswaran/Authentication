import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'


const styles= StyleSheet.create({
    container:{

        flexDirection:'column',
        // alignItems:'center',
        padding:15,
        
    },

    label:{

        fontFamily:'Poppins',
        fontSize:17,
        fontWeight:'normal',       
        textAlign:'left',
        letterSpacing:0.5,
        lineHeight:21,
        color:'#858597',
        padding:4,
    },

    inputField: {

        borderWidth:0.5,
        borderColor:'#B8B8D2',
        borderRadius:10,
        fontFamily:'Poppins',
        fontSize:16,
        width:'100%',
        padding:13,

    }
})

export const TextFormField = ({label,placeHolder,value}) => {

  const [fieldValue, setFieldvalue] = useState(value)

  const onValueChange = (changedValue) =>{
    setFieldvalue(changedValue)
  }

  return (


      <View style={styles.container} >
          
          <Text style={styles.label}>{label}</Text>

          <TextInput  
              style={styles.inputField}
              value={fieldValue}
              placeholder={placeHolder}
              onChangeText={onValueChange}
          />

      </View>

    
  )
}

export const PasswordFormField = ({label,placeHolder,value}) => {

  const [fieldValue, setFieldvalue] = useState(value)

  const onValueChange = (changedValue) =>{
    setFieldvalue(changedValue)
  }

  return (
    <View style={styles.container}>
        
        <Text style={styles.label} >{label}</Text>

        <TextInput  
            style={styles.inputField}
            value={fieldValue}
            placeholder={placeHolder}
            onChangeText={onValueChange}
            secureTextEntry={true}
        />

    </View>
    
  )


}



