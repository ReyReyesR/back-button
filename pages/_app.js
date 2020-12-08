import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store/store';
import '../scss/custom.scss';
import { ThemeProvider } from '../providers/ThemeProvider';
import themes from '../config/themes/themes.js';
import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [theme, setTheme] = useState(themes.wowcher);
  const Layout = Component.layout || HeaderFooterLayout;
  function changeTheme(themeName) {
    console.log(themeName);
    setTheme(themes[themeName]);
    console.log(theme);
  }
  const fontsClass = theme.fonts.theme
    ? `${theme.fonts.theme}, ${theme.fonts.base}`
    : `${theme.fonts.base}`;
  return (
    <Provider store={store}>
      <ThemeProvider value={theme}>
        <Layout>
          <Component {...pageProps} />
          <ThemeSwitcher changeTheme={changeTheme} />
          <style jsx global>{`
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 400;
              src: local('Nunito Regular'), local('Nunito-Regular'),
                url('/fonts/nunito-v13-latin-regular.woff2') format('woff2'),
                url('/fonts/nunito-v13-latin-regular.woff') format('woff');
            }
            body {
              background: ${theme.colors.background}
                url(${theme.images.backgroundbody}) repeat;
              background-attachment: fixed;
              font-family: ${fontsClass};
            }
            .sr-only {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border: 0;
            }
          `}</style>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
