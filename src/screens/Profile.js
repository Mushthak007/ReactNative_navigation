import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
 // const {data}=route.params
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>data</Text>
      <Button title="Go Back" onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})