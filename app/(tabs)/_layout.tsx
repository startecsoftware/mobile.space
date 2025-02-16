import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icons from '../../constants/Icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#7d02fd",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: "#f2ecf9"
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <View>{Icons.LayoutHome(25, 25, color, 2)}</View>,
        }}
      />
      <Tabs.Screen
        name="advertise"
        options={{
          title: 'Anuncie',
          tabBarIcon: ({ color }) => <View>{Icons.Ad(25, 25, color, 2)}</View>
        }}
      />
      <Tabs.Screen
        name="authentication"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <View>{Icons.Auth(25, 25, color, 2)}</View>,
        }}
      />
    </Tabs>
  );
}
