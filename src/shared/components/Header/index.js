import Link from 'next/link';
import { useState } from 'react';

const Heading = ({ largeLogo, children }) =>
  largeLogo ? <h1>{children}</h1> : <h3>{children}</h3>;

const siteTitle = 'lucianohgo';

export default function Header({ largeLogo }) {
  const [{ open }, setOpen] = useState({ open: false });

  return (
    <header className="header">
      <nav className="nav-bar">
        <Heading largeLogo={largeLogo}>
          <Link href="/">
            <a className="nav-logo">{siteTitle}</a>
          </Link>
        </Heading>
        <ul className={`${'nav-menu' + (open ? ' active' : '')}`}>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.getrevue.co/profile/lucianohgo"
            >
              Newsletter
            </a>
          </li>
          <li className="nav-item">
            <Link href="/posts">
              <a className="nav-link">Posts</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/me">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
        <a
          aria-label={`${open ? 'Close' : 'Open'} the menu`}
          className={`${'hamburger' + (open ? ' active' : '')}`}
          onClick={() => setOpen(({ open }) => ({ open: !open }))}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </a>
      </nav>
    </header>
  );
}
