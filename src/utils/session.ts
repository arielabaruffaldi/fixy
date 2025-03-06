import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAuthToken() {
  const token = await AsyncStorage.getItem('@auth_token');
  if (token) {
    const tokenParsed = JSON.parse(token);
    const { idToken } = tokenParsed;
    return idToken;
  }
  return;
}
