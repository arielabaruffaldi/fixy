import { Feather } from '@expo/vector-icons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { router, Tabs } from 'expo-router';
import { useEffect } from 'react';

import CustomBottomBar from '@/src/components/organisms/CustomBottomBar/CustomBottomBar';
import { useTheme } from '@/src/hooks/useTheme';

export default function TabLayout() {
  const { getItem: getToken } = useAsyncStorage('@auth_token');
  const theme = useTheme();
  useEffect(() => {
    const timer = setTimeout(async () => {
      const token = await getToken();
      // if (!token) {
      //   router.push('/login');
      // }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Tabs
      tabBar={(props) => <CustomBottomBar {...props} />}
      screenOptions={{
        headerShown: false,
        // tabBarStyle: styles.container,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 4,
        },
        tabBarIconStyle: {
          marginBottom: -4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pros/index"
        options={{
          title: 'Pros',
          tabBarIcon: ({ color }) => (
            <Feather name="briefcase" size={22} color={color} />
          ),
        }}
      />
      {/* href: null is used to prevent the screen from being shown in the tab bar */}
      <Tabs.Screen
        name="pros/[id]/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="projects/index"
        options={{
          title: 'Proyectos',
          tabBarIcon: ({ color }) => (
            <Feather name="briefcase" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
