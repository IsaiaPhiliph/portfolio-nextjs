import "i18next"; // before v13.0.0 -> import 'react-i18next';
import type common from "../public/locales/en/common.json";
import type home from "../public/locales/en/home.json";

interface I18nNamespaces {
  common: typeof common;
  home: typeof home;
}
// before v13.0.0 -> declare module 'react-i18next'
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
