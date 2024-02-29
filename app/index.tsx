import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Page = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title='Camera-next' onPress={() => router.push('/camera-next/')}/>
        <Button title='Camera' onPress={() => router.push('/camera/')}/>
    </View>
  )
}

export default Page