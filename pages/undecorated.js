import React from 'react';
import Head from 'next/head';
import UndecoratedLayout from '../layouts/UndecoratedLayout';

const Undecorated = () => {
  return (
    <div className="container">
      <div className="row">
        <Head>
          <title>Undecorated page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div style={{ height: '800px' }}>
                <h2>Undecorated page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Undecorated;

Undecorated.layout = UndecoratedLayout;
