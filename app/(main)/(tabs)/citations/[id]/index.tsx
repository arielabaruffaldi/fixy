import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import Text from '@/src/components/atoms/Text/Text';

const Citation = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Citation {id}</Text>
    </View>
  );
};

export default Citation;
