import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import {
  faAngleUp,
  faAngleDown,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let generated = false;

const Home = ({ dealData }) => {
  const [deals, setDeals] = useState([]);
  const [mainDeal, setMainDeal] = useState([]);
  const [sideDeals, setSideDeals] = useState([]);
  const [secondaryDeals, setSecondaryDeals] = useState([]);
  const router = useRouter();
  const [footer, setFooter] = useState(false);
  const [foot, setFoot] = useState(false);
  const startLoading = () => (loading = true);
  const stopLoading = () => (loading = false);
  const showFooter = () => setFooter(true);
  const hideFooter = () => setFooter(false);
  const showFoot = () => setFoot(true);
  const hideFoot = () => setFoot(false);
  let lastScrollTop = 0;
  let loading = false;

  useEffect(() => {
    if (dealData) {
      if (dealData.error) {
        // Handle error
      } else {
        if (dealData.curPage === -1) {
          setMainDeal(dealData.mainDeal);
          setSideDeals(dealData.deals.slice(0, 4));
          setSecondaryDeals(dealData.deals.slice(5, 9));
          setDeals((prevState) => [
            ...prevState,
            ...dealData.deals.slice(9, 24),
          ]);
        } else setDeals((prevState) => [...prevState, ...dealData.deals]);
      }
    }
  }, [dealData]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      const cachedScrollPositions = [];
      let shouldScrollRestore;

      router.events.on('routeChangeStart', () => {
        if (!shouldScrollRestore) {
          cachedScrollPositions.push([window.scrollX, window.scrollY]);
        }
      });

      router.events.on('routeChangeComplete', () => {
        if (shouldScrollRestore) {
          let { x, y } = shouldScrollRestore;
          y = y % 2950;
          setTimeout(() => {
            window.scrollTo(x, y);
          }, 1);
          shouldScrollRestore = false;
        }
      });

      router.beforePopState(() => {
        if (cachedScrollPositions.length > 0) {
          const [x, y] = cachedScrollPositions.pop();
          shouldScrollRestore = { x, y };
        }
        return true;
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo(0, 0);
    const query = router.query;
    query.page = 0;
    router.push({
      pathname: '/',
      query: '',
    });
  };

  const handleScroll = () => {
    if (
      currentScrollPercentage() > 90 &&
      dealData.curPage < dealData.maxPage &&
      !loading
    ) {
      startLoading();
      const query = router.query;
      query.page = parseInt(query.page) + 1;
      if (!query.page) query.page = 1;
      router
        .push({
          pathname: router.pathname,
          query: query,
        })
        .then(() => {
          stopLoading();
        });
    }

    let st = window.pageYOffset || document.documentElement.scrollTop;
    elementInViewport(st, lastScrollTop);
    if (st > lastScrollTop) {
      showFooter();
    } else {
      hideFooter();
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  const currentScrollPercentage = () => {
    return (
      ((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100
    );
  };

  const changeId = () => {
    if (document.getElementById('term'))
      if (generated) {
        document.getElementById('term').id = parseInt(router.query.page);
      } else {
        document.getElementById('term').id = parseInt(router.query.page - 1);
        generated = true;
      }
  };

  const elementInViewport = (st, lastScrollTop) => {
    const myElement = document.getElementsByClassName('my-element');
    let element = [...myElement].filter((element) => {
      const bounding = element.getBoundingClientRect();
      if (bounding.top > 0 && bounding.top < 250) return true;
    })[0];
    if (element) checkScroll(element, st, lastScrollTop);
  };

  const checkScroll = (element, st, lastScrollTop) => {
    if (st > lastScrollTop) {
      if (parseInt(element.id) === parseInt(router.query.page)) {
        const query = router.query;
        query.page = parseInt(query.page) + 1;
        router
          .push(
            {
              pathname: router.pathname,
              query: query,
            },
            {
              pathname: router.pathname,
              query: query,
            },
            { shallow: true }
          )
          .then(() => {
            dealData.curPage++;
          });
      }
    } else {
      if (parseInt(element.id) === parseInt(router.query.page) - 1) {
        const query = router.query;
        query.page = parseInt(query.page) - 1;
        router
          .push(
            {
              pathname: router.pathname,
              query: query,
            },
            {
              pathname: router.pathname,
              query: query,
            },
            { shallow: true }
          )
          .then(() => {
            dealData.curPage--;
          });
      }
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Wowcher React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {dealData.curPage >= 0 && (
        <div className="pagination">
          <FontAwesomeIcon
            className="chevron"
            icon={faAngleLeft}
            onClick={() => {
              if (parseInt(router.query.page) > 0)
                return (document.location.href = `/?page=${
                  parseInt(router.query.page) - 1
                }`);
              return (document.location.href = `/`);
            }}
          />
          <span>Page {parseInt(router.query.page)}</span>
          <FontAwesomeIcon
            className="chevron"
            icon={faAngleRight}
            onClick={() =>
              (document.location.href = `/?page=${
                parseInt(router.query.page) + 1
              }`)
            }
          />
        </div>
      )}

      <div className="grid">
        {sideDeals.length > 0 && (
          <div className="col sidebar">
            <main>
              {sideDeals.map((deal) => (
                <Link
                  href="/deal/[...slug]"
                  as={`/deal/london/${deal.id}${deal.urlPrefix}`}
                  key={deal.id}
                >
                  <a className="card">
                    <h3>{deal.headline}</h3>
                  </a>
                </Link>
              ))}
            </main>
          </div>
        )}

        {secondaryDeals.length > 0 && mainDeal && (
          <div className="col main">
            <main>
              <a
                href={`https://www09.devwowcher.co.uk/${mainDeal.shareUrl}`}
                className="card main-deal"
              >
                <h3>{mainDeal.headline}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: mainDeal.description }}
                ></div>
              </a>
              {secondaryDeals.map((deal) => (
                <Link
                  href="/deal/[...slug]"
                  as={`/deal/london/${deal.id}${deal.urlPrefix}`}
                  key={deal.id}
                >
                  <a className="card secondary-deal">
                    <h3>{deal.headline}</h3>
                    <p>{deal.title}</p>
                  </a>
                </Link>
              ))}
            </main>
            <div id="endOfPage"></div>
          </div>
        )}
      </div>

      <div className="grid">
        {deals.length > 0 &&
          deals.map((deal, index) => (
            <Link
              href="/deal/[...slug]"
              as={`/deal/london/${deal.id}${deal.urlPrefix}`}
              key={deal.id}
            >
              <a className="card bottom-deal">
                <h3>{deal.headline}</h3>
                <p>{deal.title}</p>
                {(index > 0 && index % 23) === 0 &&
                  parseInt(dealData.curPage) > 0 && (
                    <div id="term" className="my-element"></div>
                  )}
                {changeId()}
              </a>
            </Link>
          ))}
      </div>
      {footer && dealData.curPage >= 0 && (
        <div
          className={`footer ${foot ? 'footer-expanded' : 'footer-collapsed'}`}
        >
          <div className="footer-container">
            <div className="footer-left" onClick={() => goToTop()}>
              <FontAwesomeIcon className="side-chevron" icon={faAngleUp} />
              Scroll to top
            </div>
            <div className="footer-middle">
              <FontAwesomeIcon
                className="bot-chevron"
                icon={faAngleLeft}
                onClick={() => {
                  if (parseInt(router.query.page) > 0)
                    return (document.location.href = `/?page=${
                      parseInt(router.query.page) - 1
                    }`);
                  return (document.location.href = `/`);
                }}
              />
              <span>Page {parseInt(router.query.page)}</span>
              <FontAwesomeIcon
                className="bot-chevron"
                icon={faAngleRight}
                onClick={() =>
                  (document.location.href = `/?page=${
                    parseInt(router.query.page) + 1
                  }`)
                }
              />
            </div>
            {!foot && (
              <div className="footer-right" onClick={() => showFoot()}>
                Show footer
                <FontAwesomeIcon className="side-chevron" icon={faAngleDown} />
              </div>
            )}
            {foot && (
              <div className="footer-right" onClick={() => hideFoot()}>
                Hide footer
                <FontAwesomeIcon className="side-chevron" icon={faAngleUp} />
              </div>
            )}
          </div>
        </div>
      )}
      {foot && (
        <div className="foot">
          <img src="/foot.png" alt="footer" width="1450" height="300" />
        </div>
      )}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding-top: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main-deal {
          min-height: 500px;
          min-width: 900px;
        }

        .pagination {
          text-align: center;
        }

        .secondary-deal {
          min-height: 300px;
          width: 900px;
        }

        .bottom-deal {
          flex: 1 0 21%;
          min-height: 230px;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
          margin: auto -1rem 1rem;
        }

        .col {
          padding: 1rem;
        }

        .sidebar {
          flex: 1;
        }

        .main {
          flex: 5;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #eb008c;
          border-color: #eb008c;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .chevron {
          color: #eb008c;
          cursor: pointer;
          padding: 0 30px;
          width: 10%;
        }

        .bot-chevron {
          color: #eb008c;
          cursor: pointer;
          padding: 5px 30px;
          width: 11%;
        }

        .side-chevron {
          color: #eb008c;
          cursor: pointer;
          padding: 0 15px;
          width: 14%;
        }

        .footer {
          background-color: white;
          height: 60px;
          left: 0;
          right: 0;
          position: fixed;
          text-align: center;
          width: 100%;
          z-index: 999;
        }
        .footer-collapsed {
          bottom: 0;
        }
        .footer-expanded {
          bottom: 300px;
        }
        .footer-container {
          padding: 10px;
          display: flex;
        }
        .my-element {
          background-color: green;
          height: 5px;
          width: 100%;
        }
        .footer-right {
          flex-grow: 0;
          cursor: pointer;
          padding-top: 5px;
        }
        .footer-left {
          flex-grow: 0;
          cursor: pointer;
          padding-top: 5px;
        }
        .footer-middle {
          flex-grow: 1;
        }
        .foot {
          bottom: 0;
          left: 0;
          right: 0;
          position: fixed;
          text-align: center;
          z-index: 999;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async ({ query = {} }) => {
  const page = query.page || 0;
  let dealData = null;

  try {
    const res = await fetch(
      `https://public-api.wowcher.co.uk/v1/deal/national-deal?page=${page}&pageSize=24`
    );
    if (res.status !== 200) {
      throw new Error('Failed to fetch');
    }
    dealData = await res.json();
    dealData.curPage = page - 1;
    dealData.maxPage = page;
  } catch (err) {
    dealData = { error: { message: err.message } };
  }

  return { props: { dealData } };
};

export default Home;
