import React from 'react';
import { NavigationContainer, RouteProp  } from '@react-navigation/native';

import HomePage from './screen/Home';
import DetailPage from './screen/Detail';
import SetUserNamePage from './screen/SetUserName';

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from './shared/themes/Theme';



type TScreenDefinitions = {
  home: { newName: string } | undefined;
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
            <SafeAreaView
              style={{ flex: 1 }}
              edges={['top', 'left', 'right']} >
              {children}
            </SafeAreaView>)}
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: theme.colors.background
            }
          }}
        >
          <Stack.Screen name="home" component={HomePage} />

          <Stack.Group
            screenOptions={{
              sheetCornerRadius: 24,
              presentation: 'formSheet',
              contentStyle: {
                height: '100%',
              }
            }}
            screenLayout={
              ({ children }) => (
                <SafeAreaView
                  style={{
                    flex: 1,
                    padding: 16,
                    backgroundColor: theme.colors.paper
                  }}
                  edges={['left', 'right']}
                >
                  {children}
                </SafeAreaView>
              )
            }
          >
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



export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp <TScreenDefinitions, T>