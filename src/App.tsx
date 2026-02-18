import AppRoutes from '@/Routes';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { 
         Inter_800ExtraBold, 
         Inter_400Regular, 
         Inter_400Regular_Italic, 
         useFonts } from '@expo-google-fonts/inter';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    regular: Inter_400Regular,
    regularItalic: Inter_400Regular_Italic,
    extrabold: Inter_800ExtraBold
  }); 


  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


  return (
    <View style={{ flex: 1 }}>
      <AppRoutes />
      <StatusBar style="auto" />
    </View>
  );
}


