import { DateJS } from '@/helpers/dayjs';
import style from './style.module.css';

const CardEvent = (props: any) => {
  const { data, direction } = props;

  const styleDirection = direction == 'right' ? style.right : style.left;

  return (
    <div className={[style.timelineUnit, styleDirection].join(' ')}>
      <div className={style.arrow}></div>
      <div className={style.icon}>
        <span className={style.day}>
          {DateJS.getFormatDate(data?.time, 'DD')}
        </span>
        <span className={style.month}>
          {DateJS.getFormatDate(data?.time, 'MMM')}
        </span>
      </div>
      <div className={style.dataMetaHold}>
        <img
          src={data?.thumbnail}
          alt="thumbnail"
          className={style.timelineImg}
        />
        <h3 className="">{data?.name}</h3>
      </div>
      <p>{data?.description}</p>
    </div>
  );
};

export default CardEvent;
