import React, { useEffect, useState } from 'react';
import SplashScreen from './screens/SplashScreen';
import Asuult1 from './screens/Asuult1';
import MainActivity from './screens/MainActivity';
import AdviceOgoh from './screens/AdviceOgoh';
import Settings from './screens/Settings';
import OnBoardingScreen from './screens/OnBoardingScreen';
import onBoardin2 from './screens/onBoardin2';

import {
  StyleSheet, View, Text, TouchableOpacity, Image, Alert, LogBox
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {

  const [isFirstLauch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })
  }, [])

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  const showAlert = () =>
    Alert.alert(
      "Зөвөлгөө хэсэг",
      "Энэхүү хэсгээс та өөрт хэрэгтэй зөвлөгөө болон мэдээллүүдээ аваарай!",
      [
        {
          text: "За",
          //onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );

  if (isFirstLauch == null) {
    return null;
  } else if (isFirstLauch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='OnBoardingScreen'
          screenOptions={{ title: null, headerStyle: { elevation: 0 } }}
        //headerMode='none'
        >
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Asuult1'
            component={Asuult1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='MainActivity'
            component={MainActivity}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='onBoardin2'
            component={onBoardin2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AdviceOgoh'
            component={AdviceOgoh}
            options={({ navigation }) => ({
              headerLeft: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Image style={{ width: 25, height: 25, marginLeft: 10, tintColor: '#076DF2' }} source={require('./assets/back.png')} />
              </TouchableOpacity>
              ),
              headerRight: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => showAlert()}>
                <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#076DF2' }} source={require('./assets/question.png')} />
              </TouchableOpacity>
              ),
              headerTitle: 'Бүсгүйн зөвөлгөө',
              headerTitleStyle: { fontFamily: 'Lobster-Regular', color: '#076DF2', marginLeft: 60 }
            })}>
          </Stack.Screen>
          <Stack.Screen
            name='Settings'
            component={Settings}
            options={({ navigation }) => ({
              headerLeft: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Image style={{ width: 25, height: 25, marginLeft: 10, tintColor: '#076DF2' }} source={require('./assets/back.png')} />
              </TouchableOpacity>
              ),
              headerTitle: 'Бүсгүйн хуанли',
              headerTitleStyle: { fontFamily: 'Lobster-Regular', color: '#076DF2', marginLeft: 60 }
            })}>
          </Stack.Screen>
          <Stack.Screen
            name='OnBoardingScreen'
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MainActivity'
          screenOptions={{ title: null, headerStyle: { elevation: 0 } }}
        //headerMode='none'
        >
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Asuult1'
            component={Asuult1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='MainActivity'
            component={MainActivity}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='onBoardin2'
            component={onBoardin2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AdviceOgoh'
            component={AdviceOgoh}
            options={({ navigation }) => ({
              headerLeft: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Image style={{ width: 25, height: 25, marginLeft: 10, tintColor: '#076DF2' }} source={require('./assets/back.png')} />
              </TouchableOpacity>
              ),
              headerRight: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => showAlert()}>
                <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#076DF2' }} source={require('./assets/question.png')} />
              </TouchableOpacity>
              ),
              headerTitle: 'Бүсгүйн зөвөлгөө',
              headerTitleStyle: { fontFamily: 'Lobster-Regular', color: '#076DF2', marginLeft: 60 }
            })}>
          </Stack.Screen>
          <Stack.Screen
            name='Settings'
            component={Settings}
            options={({ navigation }) => ({
              headerLeft: () => (<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Image style={{ width: 25, height: 25, marginLeft: 10, tintColor: '#076DF2' }} source={require('./assets/back.png')} />
              </TouchableOpacity>
              ),
              headerTitle: 'Бүсгүйн хуанли',
              headerTitleStyle: { fontFamily: 'Lobster-Regular', color: '#076DF2', marginLeft: 60 }
            })}>
          </Stack.Screen>
          <Stack.Screen
            name='OnBoardingScreen'
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    color: '#000',
  }
})

export default App;