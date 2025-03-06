import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Tabs, router } from 'expo-router';
import { useEffect } from 'react';

export default function TabLayout() {
  const { getItem: getToken } = useAsyncStorage('@auth_token');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const token = await getToken();
      if (!token) {
        router.push('/login');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="citations/index"
        options={{
          title: 'Citations',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="ticket" size={24} color={color} />
          ),
        }}
      />
      {/* href: null is used to prevent the screen from being shown in the tab bar */}
      <Tabs.Screen
        name="citations/[id]/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
