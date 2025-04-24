/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_DOCS_URL: string;
  readonly VITE_OUTPUT_PATH: string;
  readonly VITE_CLIENT_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
