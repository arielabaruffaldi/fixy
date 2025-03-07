import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import Text from '../../atoms/Text/Text';

import { createStyles } from './styles';

import { useTheme } from '@/src/hooks/useTheme';
import { normalize } from '@/src/utils/normalizeText';

const CustomBottomBar = ({ state, descriptors, navigation }: any) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        console.log({ route });

        const isFocused = state.index === index;

        const TabIcon = options?.tabBarIcon;

        console.log({ TabIcon, options });

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: { fromBuy: false },
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
            // disabled={route.name === "OrderEstimate" || route.name === "HomeMart"}
            activeOpacity={1}
          >
            <View style={styles.tabView}>
              <View style={styles.tabIconContainer}>
                {TabIcon && (
                  <TabIcon
                    color={
                      isFocused
                        ? theme.colors.primaryText
                        : theme.colors.secondaryText
                    }
                    size={24}
                    style={styles.tabIcon}
                  />
                )}
                {!label.includes('/') && (
                  <Text
                    // fontFamily={fontFamilies.LatoRegular}
                    numberOfLines={1}
                    size={'xsmall'}
                    weight="medium"
                    align="center"
                    color={isFocused ? 'primaryText' : 'secondaryText'}
                    // style={{
                    //   color: isFocused ? colors.blue.seven : colors.grey.four,
                    //   maxWidth: '97%',
                    // }}
                  >
                    {label}
                  </Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomBottomBar;
