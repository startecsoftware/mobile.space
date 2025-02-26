import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icons from '../../constants/Icons';

export default function TabLayout() {

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
            title: 'Explorar',
            tabBarIcon: ({ color }) => <View>{Icons.Search(25, 25, color, 2)}</View>,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => <View>{Icons.LayoutHome(25, 25, color, 2)}</View>
          }}
        />
        <Tabs.Screen
          name="advertise"
          options={{
            title: 'Anuncie',
            tabBarIcon: ({ color }) => <View>{Icons.Megaphone(25, 25, color, 2)}</View>
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: 'Mensagens',
            tabBarIcon: ({ color }) => <View>{Icons.Chat(25, 25, color, 2)}</View>
          }}
        />
        <Tabs.Screen
          name="authentication"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <View>{Icons.User(25, 25, color, 2)}</View>,
          }}
        />
      </Tabs>
  );
}
