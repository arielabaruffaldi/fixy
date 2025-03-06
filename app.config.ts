import 'dotenv/config';

export default {
  expo: {
    extra: {
      apiUrl: process.env.BASE_URL,
      cryptoSecretKey: process.env.CRYPTO_SECRET_KEY,
    },
  },
};
