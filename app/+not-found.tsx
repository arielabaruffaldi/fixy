import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import Text from '@/src/components/atoms/Text/Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>This screen doesn&apos;t exist.</Text>
      </View>
    </>
  );
}
