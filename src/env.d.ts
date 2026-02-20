/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STRIPE_SECRET_KEY?: string;
  readonly PROD_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}