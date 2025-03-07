import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from 'react-query';

// import OpenSansFontBold from '@/src/assets/fonts/OpenSans-Bold.ttf';
// import OpenSansFontLight from '@/src/assets/fonts/OpenSans-Light.ttf';
// import OpenSansFontMedium from '@/src/assets/fonts/OpenSans-Medium.ttf';
// import OpenSansFontRegular from '@/src/assets/fonts/OpenSans-Regular.ttf';
import OpenSansFontBold from '@/src/assets/fonts/OpenSans-Bold.ttf';
import OpenSansFontLight from '@/src/assets/fonts/OpenSans-Light.ttf';
import OpenSansFontMedium from '@/src/assets/fonts/OpenSans-Medium.ttf';
import OpenSansFontRegular from '@/src/assets/fonts/OpenSans-Regular.ttf';
import { useThemeStore } from '@/src/stores/theme/theme.store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const { themeObject, initTheme } = useThemeStore();

  const [loaded] = useFonts({
    OpenSansBold: OpenSansFontBold,
    OpenSansLight: OpenSansFontLight,
    OpenSansMedium: OpenSansFontMedium,
    OpenSansRegular: OpenSansFontRegular,
  });

  useEffect(() => {
    initTheme(); // Inicializa el tema desde AsyncStorage
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={themeObject}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(main)/(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
