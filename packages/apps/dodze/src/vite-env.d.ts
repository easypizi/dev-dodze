/// <reference types="vite/client" />

interface ImportMetaEnv {
  DEV_DODZE_BASE_URL: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
