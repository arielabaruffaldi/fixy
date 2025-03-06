import { useTheme } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStyles } from './styles';

interface LayoutProps {
  children: React.ReactNode;
  withScroll?: boolean;
}

const Layout = ({ children, withScroll = false }: LayoutProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {withScroll ? <ScrollView>{children}</ScrollView> : children}
      </SafeAreaView>
    </View>
  );
};

export default Layout;
