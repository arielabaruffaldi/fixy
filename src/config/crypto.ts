import CryptoES from 'crypto-es';

const cryptoSecretKey = process.env.EXPO_PUBLIC_CRYPTO_SECRET_KEY ?? '';
export const encryptText = (text: string): string => {
  try {
    const encrypted = CryptoES.AES.encrypt(text, cryptoSecretKey);
    return encrypted.toString();
  } catch (error) {
    console.error('Failed to encrypt text', error);
    throw new Error('Failed to encrypt text');
  }
};

export const decryptText = (encryptedText: string): string => {
  try {
    const decrypted = CryptoES.AES.decrypt(encryptedText, cryptoSecretKey);
    return decrypted.toString(CryptoES.enc.Utf8);
  } catch (error) {
    console.error('Failed to decrypt text', error);
    throw new Error('Failed to decrypt text');
  }
};
