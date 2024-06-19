import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, tabBarStyle: {
          position: 'absolute',
          left:20,
          borderRadius: 20,
          height:65,
          width: '90%',
          bottom: 40,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? 'white' : color}  
            style={{ backgroundColor: focused ? '#1e90ff' : 'transparent', padding: focused ? 10 : 0, borderRadius: focused ? 50: 0 }}/>
          ),
        }}
      />
      <Tabs.Screen
        name="socialnetwork"
        options={{
          title: 'Redes Sociais',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'share-social' : 'share-social-outline'} color={focused ? 'white' : color}   
            style={{ backgroundColor: focused ? '#1e90ff' : 'transparent', padding: focused ? 10 : 0, borderRadius: focused ? 50: 0 }}/>
          ),
        }}
      />
    </Tabs>
  );
}
