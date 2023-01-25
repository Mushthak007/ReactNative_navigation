import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import Profile from './src/screens/Profile'
import Account from './src/screens/Account'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const  stack=createStackNavigator()
const bottomTab=createBottomTabNavigator()
const App = () => {
function HomeStackScreen() {
    return (
      <bottomTab.Navigator initialRouteName='Home' backBehavior='history' sceneContainerStyle={{backgroundColor:'green'}} 
      screenOptions={{tabBarActiveTintColor:'red',tabBarInactiveTintColor:'blue',tabBarLabelPosition:'below-icon',
      tabBarStyle:{backgroundColor:"yellow",position:'absolute',left:10,right:10,bottom:15,borderRadius:10}
    }}
      >
      <bottomTab.Screen name='Home' options={{headerShown:false,title:"my home",tabBarIcon:({focused,color,size})=>(
         <MaterialCommunityIcons name="home" color={'black'} size={20} />
      ),tabBarBadge:5,tabBarBadgeStyle:{backgroundColor:'green'}}}  component={HomeScreen} /> 
      <bottomTab.Screen name='Profile'  component={Profile} />
      <bottomTab.Screen name='Account'  component={Account} />
    </bottomTab.Navigator>
     );
   }
  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName='BottomTab'>
      <stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen} />
      <stack.Screen name='BottomTab' options={{headerShown:false}} component={HomeStackScreen} />
      <stack.Screen name='Profile' component={Profile}
       options={{headerTitle:"My Profile",headerTitleAlign:'center',headerTintColor:'blue',headerTransparent:true}}/>
    </stack.Navigator>

  </NavigationContainer>
  )
}

export default App
