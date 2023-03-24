import { capitalize } from '@/helpers/base.helper';
import { menu } from '@/pages';
import Link from 'next/link';
import React from 'react';
import style from './style.module.css';

type Props = {
  activeId?: string;
};

const Header = (props: Props) => {
  const { activeId } = props;

  return (
    <header className={style.header}>
      <ul className={style.headerMenu}>
        {menu.map((e, i) => {
          return (
            <li key={i} className={style.menuItem}>
              <Link
                href={'#' + e}
                className={[
                  style.menuItemLink,
                  activeId == e ? style.active : '',
                ].join(' ')}
                scroll={false}
              >
                {capitalize(e)}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={style.mobile}>
        <div className={style.headerMobile}>
          <label
            htmlFor="toggle-mobile-menu"
            className={style.toggleMenu}
          ></label>
          <span className={style.mobileActiveCurrentName}>
            {activeId || 'menu'}
          </span>
        </div>
        <input
          type="checkbox"
          hidden
          id="toggle-mobile-menu"
          className={style.toggle}
        />
        <div className={style.mobileMenu}>
          <div className={style.mobileMenuHeader}>
            <label
              htmlFor="toggle-mobile-menu"
              className={
                'float-right h-10 w-10 flex items-center justify-center text-gray-AA'
              }
            >
              X
            </label>
          </div>
          {menu.map((e, i) => {
            return (
              <li key={i} className={style.menuItem}>
                <Link
                  href={'#' + e}
                  className={[
                    style.menuItemLink,
                    activeId == e ? style.active : '',
                  ].join(' ')}
                  scroll={false}
                >
                  <label htmlFor="toggle-mobile-menu">{capitalize(e)}</label>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
