import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeProvider';
import Link from 'next/link';

const HeaderNav = () => {
  const theme = useContext(ThemeContext);
  return (
    <nav>
      <Link href="/index" as="/index">
        <a className="link">(Index)</a>
      </Link>
      <Link href="/deals" as="/deals">
        <a className="link">(Deals)</a>
      </Link>
      <Link href="/undecorated" as="/undecorated">
        <a className="link">(Undecorated)</a>
      </Link>

      <Link href="/page/aboutus" as="/page/aboutus">
        <a className="link">(About Us)</a>
      </Link>
      <Link href="/page/contact" as="/page/contact">
        <a className="link">(Contact Us)</a>
      </Link>

      <style jsx>{`
        .link {
          color: ${theme.colors.navlink};
        }
        .link:hover {
          color: ${theme.colors.navlinkhover};
        }
      `}</style>
    </nav>
  );
};

export default HeaderNav;
