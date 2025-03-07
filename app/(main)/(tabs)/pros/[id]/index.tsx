import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import Text from '@/src/components/atoms/Text/Text';

const Pro = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Pro {id}</Text>
    </View>
  );
};

export default Pro;
