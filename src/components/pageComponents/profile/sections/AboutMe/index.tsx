import TimeLine from '@/components/common/TimeLine';
import Link from 'next/link';
import React from 'react';
import style from './style.module.css';

import data from '@/data/timeLine.json';

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div id="about" className="container content-wrapper">
      {/* Title */}
      <div className="text-center">
        <h1 className="main-title title">
          About <span className="text-gray-AA">Me</span>
        </h1>
      </div>
      <div className="hr"></div>

      {/* Description */}
      <div className={style.contentWrapper}>
        <h3 className={style.description}>
          I believe that I have the power of an expert to help you succeed and
          I’m feeling free to think of my future colleagues as brilliant and
          creative people.
        </h3>
      </div>
      <div className="hr"></div>

      {/* Timeline */}

      <TimeLine timeline={data} />
    </div>
  );
};

export default AboutMe;
