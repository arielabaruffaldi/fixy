import { useTheme } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { spacing } from '@/src/theme/spacing';

import { createStyles } from './styles';

interface LayoutProps {
  children: React.ReactNode;
  withScroll?: boolean;
  hasPadding?: boolean;
}

const Layout = ({
  children,
  withScroll = false,
  hasPadding = true,
}: LayoutProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const padding = hasPadding ? { padding: spacing.md } : {};

  return (
    <View style={[styles.container, padding]}>
      <SafeAreaView>
        {withScroll ? <ScrollView>{children}</ScrollView> : children}
      </SafeAreaView>
    </View>
  );
};

export default Layout;
