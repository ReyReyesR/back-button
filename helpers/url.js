import axios from 'axios';
import {
  THEME_WOWCHER,
  THEME_LIVINGSOCIAL,
  URLSTATIC,
  URLSTATICSUFFIX,
} from '../config/setup/setup';

export const getMainTheme = (text) => {
  // get the Main Theme from the URL
  if (text.toLowerCase().includes(THEME_WOWCHER.toLowerCase()))
    return THEME_WOWCHER;
  return THEME_LIVINGSOCIAL;
};

export const getStaticContent = async (context) => {
  // process.env only exist in SSR

  const mainTheme = process.env.BRAND || getMainTheme(context.req.headers.host);
  // We need to remove the .html that may can appear
  const url =
    URLSTATIC[mainTheme] +
    context.query.slug.toString().replace(/.html$/gi, '') +
    URLSTATICSUFFIX;

  try {
    const data = await axios.get(url);
    return {
      // will be passed to the page component as props
      props: { slug: data.data.text, title: data.data.displayName },
    };
  } catch (err) {
    const { res } = context;
    res.statusCode = 404;

    return {
      // if url or data.data.text doesn't exist we will shown the 404 page
      props: { errorCode: true },
    };
  }
};
