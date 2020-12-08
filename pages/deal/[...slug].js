import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SecondaryDeal() {
  const router = useRouter();
  const { slug } = router.query;
  const location = slug[0];
  const id = slug[1];
  const title = slug[2];

  return (
    <>
      <h1> Deal {id}</h1>
      Location: {location}; Title: {title};
      <h2>
        <Link href="/">
          <a>Back to deals</a>
        </Link>
      </h2>
    </>
  );
}
