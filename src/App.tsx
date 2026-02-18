import AppRoutes from '@/Routes';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppRoutes />
      <StatusBar style="auto" />
    </View>
  );
}


