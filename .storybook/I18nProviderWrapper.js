import React from "react";

export function I18nProviderWrapper({ children, i18n, locale }) {
    React.useEffect(() => {
      i18n.changeLanguage(locale);
    }, [i18n, locale]);
    return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
  }