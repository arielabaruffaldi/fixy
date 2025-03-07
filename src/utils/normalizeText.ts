import { moderateScale } from 'react-native-size-matters';

function normalize(number: number, factor = 0.35) {
  return moderateScale(number, factor);
}

export { normalize };
