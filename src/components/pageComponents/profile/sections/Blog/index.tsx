import TimeLine from '@/components/common/TimeLine';
import React from 'react';
import style from './style.module.css';

import data from '@/data/timeLine.json';

type Props = {};

const Blog = (props: Props) => {
  return (
    <div id="blog" className="container content-wrapper">
      {/* Title */}
      <div className="text-center">
        <h1 className="main-title title">Blog</h1>
      </div>
      <div className="hr"></div>

      <TimeLine timeline={data} />
    </div>
  );
};

export default Blog;
