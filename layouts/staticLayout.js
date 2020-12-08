import React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../scss/components/staticcard.scss';
import '../scss/components/app.scss';

const Layout = ({ title, children, extraClasses }) => {
  const layoutClass = classNames('app__container container', {
    [extraClasses]: extraClasses,
  });
  return (
    <div className={layoutClass}>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  extraClasses: PropTypes.string,
};

// Same approach for defaultProps too
Layout.defaultProps = {
  title: '',
  children: {},
  extraClasses: '',
};

export default Layout;
