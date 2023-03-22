import Link from 'next/link';
import React from 'react';
import style from './style.module.css';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="container pt-10 mb-[350px]">
      <div className={style.imageWrapper}>
        <div className={style.imageHolder}>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="avatar" />
        </div>
      </div>

      <div className={style.nameBox}>
        <h1 className={style.name}>John Doe</h1>
        <p className={style.greeting}>
          Hello, I'm John Doe. I do illustrations, web design and icon design. I
          am a WordPress lover, big football fan and serial entrepreneur.
        </p>
        <Link href={`#portfolio`} className={style.checkoutButton}>
          Check out my work
        </Link>
      </div>
    </div>
  );
};

export default Intro;
