import { OverlayImageContext } from '@/contexts/useOverlayImage';
import React, { Fragment, useContext } from 'react';
import style from './style.module.css';

type Props = {};

const OverlayImage = (props: Props) => {
  const { showImage, handleReset, image } = useContext(OverlayImageContext);
  return (
    <Fragment>
      <div
        className={[style.overlay, showImage ? style.show : ''].join(' ')}
        onClick={handleReset}
      ></div>
      <div className={[style.imageShow, showImage ? style.show : ''].join(' ')}>
        <div className={style.imageWrapper}>
          <img src={image?.thumbnail} alt="thumbnail" />
          <div className={style.actionsBox}>
            <span className={style.close} onClick={handleReset}>
              Close
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OverlayImage;
