import React from 'react';
import StaticCard from '../../components/static/StaticCard';
import Error from '../404';
import Layout from '../../layouts/staticLayout';
import { getStaticContent } from '../../helpers/url';

const Post = ({ errorCode, slug, title }) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={title}>
      <StaticCard content={slug} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getStaticContent(context);
}

export default Post;
