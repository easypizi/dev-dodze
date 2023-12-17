import packageData from '../../package.json';

class AppConfig {
  ready = false;

  apiBaseUrl = import.meta.env.DEV_DODZE_BASE_URL;

  appVersion = packageData.version;
}

export const appConfig = new AppConfig();
