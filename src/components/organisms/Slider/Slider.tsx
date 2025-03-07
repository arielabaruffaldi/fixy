import { LinearGradient } from 'expo-linear-gradient';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import Text from '../../atoms/Text/Text';

import { createStyles } from './styles';

import { useTheme } from '@/src/hooks/useTheme';

interface ImageSliderProps {
  image: ImageSourcePropType;
  title: string;
  index: number;
  scrollX: SharedValue<number>;
}

interface SliderProps {
  data: { image: ImageSourcePropType; title: string }[];
}

const width = Dimensions.get('window').width;

const ImageSlider = ({ image, title, index, scrollX }: ImageSliderProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View key={index} style={[styles.imageContainer, rnAnimatedStyle]}>
      <Image source={image} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <View style={styles.titleContainer}>
          <Text size="large" weight="bold" color="white">
            {title}
          </Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const Slider = ({ data }: SliderProps) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.FlatList
        data={data}
        renderItem={({ item, index }) => (
          <ImageSlider
            title={item.title}
            image={item.image}
            index={index}
            scrollX={scrollX}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
      />
    </View>
  );
};

export default Slider;
