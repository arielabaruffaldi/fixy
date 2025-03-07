import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

import { createStyles } from './styles';

import { useTheme } from '@/src/hooks/useTheme';

const SearchInput = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="search" size={22} color={theme.colors.secondaryText} />
      </View>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        placeholderTextColor={theme.colors.secondaryText}
      />
    </View>
  );
};

export default SearchInput;
