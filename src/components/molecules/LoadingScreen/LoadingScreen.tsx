import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoadingScreen() {
  return (
    <SafeAreaView>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}
