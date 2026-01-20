import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '../../components/haptic-tab';
import { GameProvider } from "../../context/GameContext";

export default function TabLayout() {

  return (
    <GameProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#0a7ea4',
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Главная',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Настройки',
            tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={28} color={color} />,
          }}
        />
      </Tabs>
    </GameProvider>
  );
}
