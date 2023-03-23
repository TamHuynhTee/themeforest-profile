import React, { Fragment } from 'react';
import CardEvent from '../CardEvent';
import style from './style.module.css';

type Props = {
  startTitle?: string;
  endTitle?: string;
  timeline: any[];
};

const TimeLine = (props: Props) => {
  const { startTitle = 'Start', endTitle = 'End', timeline } = props;

  return (
    <div className={style.timeline}>
      {/* Start */}
      <div className={style.timelinePoint}>
        <span>{startTitle}</span>
      </div>

      {timeline.map((time) => (
        <Fragment key={time.year}>
          <div className={[style.timelinePoint, style.milestone].join(' ')}>
            <span>{time.year}</span>
          </div>

          {time?.events?.map((event: any, index: number) => {
            const direction = index % 2 == 0 ? 'left' : 'right';
            return <CardEvent direction={direction} key={index} data={event} />;
          })}
        </Fragment>
      ))}

      {/* End */}
      <div
        className={[style.timelinePoint, style.milestone, style.last].join(' ')}
      >
        <span>{endTitle}</span>
      </div>
    </div>
  );
};


export default TimeLine;
