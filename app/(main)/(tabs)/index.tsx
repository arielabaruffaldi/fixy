import { View } from 'react-native';

import Text from '@/src/components/atoms/Text/Text';
import SearchInput from '@/src/components/molecules/SearchInput/SearchInput';
import Layout from '@/src/components/organisms/Layout/Layout';
import Slider from '@/src/components/organisms/Slider/Slider';
import {
  isAuthenticatedSelector,
  useAuthenticationStore,
} from '@/src/stores/authentication';
import { spacing } from '@/src/theme/spacing';
import { imageSliderData } from '@/src/utils/imageSlider';

const MainIndex = () => {
  const isAuthenticated = useAuthenticationStore(isAuthenticatedSelector);
  console.log({ isAuthenticated });
  return (
    <Layout>
      <SearchInput />
      <View style={{ marginVertical: spacing.md }}>
        <Text size="large" weight="bold">
          Buscar por categoría
        </Text>
      </View>
      <Slider data={imageSliderData} />
    </Layout>
  );
};

export default MainIndex;
