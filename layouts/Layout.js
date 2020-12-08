import React from 'react';
import Head from 'next/head';

export default function Layout({ title, children, extraClasses }) {
  return (
    <div className={extraClasses}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="main-container">{children}</div>
    </div>
  );
}
