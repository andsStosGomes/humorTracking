import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './screen/Home';
import DetailPage from './screen/Detail';
import SetUserNamePage from './screen/SetUserName';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from './shared/themes/Theme';



type TScreenDefinitions = {
  home: undefined;
  setUserName: undefined;
  details: { rate: number };
}


export type TabNavigationScreenProp = {
  navigate: <T extends keyof TScreenDefinitions>(screen: T, params: TScreenDefinitions[T]) => void;
  goBack: () => void;
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export default function AppRoutes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenLayout={({ children }) => (
            <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']} >
              {children}
            </SafeAreaView>)}
          screenOptions={{
            headerShown : false, 
            contentStyle : {
              backgroundColor : theme.colors.background
            }
          }}
          >
          <Stack.Screen name="home" component={HomePage} />

          <Stack.Group screenOptions={{ 
            sheetCornerRadius: 24, 
            presentation: 'formSheet' }}>
            <Stack.Screen 
              name="details" 
              component={DetailPage} 
              options={{ sheetAllowedDetents: [0.8, 0.95] }}
            />
            <Stack.Screen 
              name="setUserName" 
              component={SetUserNamePage} 
              options={{ sheetAllowedDetents: [0.4, 0.6] }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}