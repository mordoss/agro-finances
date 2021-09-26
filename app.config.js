import 'dotenv/config';

export default {
  expo: {
    name: 'moja-njiva',
    slug: 'moja-njiva',
    privacy: 'public',
    platforms: ['ios', 'android'],
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icons/corn.svg.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      package: 'com.yourcompany.yourappname'
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      webClientId: process.env.WEB_CLIENT_ID,
      dbURL: process.env.DATABASE_URL
    }
  }
};
