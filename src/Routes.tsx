import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './screen/Home';
import DetailPage from './screen/Detail';
import SetUserNamePage from './screen/SetUserName';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';



type TScreenDefinitions = {
  home: undefined;
  setUserName: undefined;
  details: { rate: number };
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export default function AppRoutes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home" 
           screenLayout={({ children }) => (
             <SafeAreaView style={{ flex: 1 }}>
               {children}
             </SafeAreaView>)}>
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="details" component={DetailPage} />
          <Stack.Screen name="setUserName" component={SetUserNamePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}