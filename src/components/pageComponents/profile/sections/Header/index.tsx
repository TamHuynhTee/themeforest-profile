import Link from 'next/link';
import React from 'react';
import style from './style.module.css';

type Props = {};

const menu = [
  { label: 'about', href: '#about' },
  { label: 'portfolio', href: '#portfolio' },
  { label: 'services', href: '#services' },
  { label: 'blog', href: '#blog' },
  { label: 'contact', href: '#contact' },
  { label: 'features', href: '#features' },
];

const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <ul className={style.headerMenu}>
        {menu.map((e, i) => {
          return (
            <li key={i} className={style.menuItem}>
              <Link href={e.href} className={style.menuItemLink}>
                {e.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
