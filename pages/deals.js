import React from 'react';
import Head from 'next/head';

const Deals = () => {
  return (
    <>
      <Head>
        <title>Deals page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app__container container">
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: '800px' }}>
              <h2>Deals page</h2>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: '800px' }}>
              <h2>Col 2</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
