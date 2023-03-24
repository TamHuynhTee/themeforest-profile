import { OverlayImageContext } from '@/contexts/useOverlayImage';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import style from './style.module.css';

const data = [
  {
    thumbnail:
      'https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/uploads/2013/04/3-320x320.jpg',
    name: 'ORANGE OCEAN IN YOUR EYES',
    description:
      'Nam et mauris non lectus ullamcorper pellentesque. Integer rhoncus ullamcorper purus.',
    types: ['ILLUSTRATIONS', 'WEB DESIGN'],
  },
  {
    thumbnail:
      'https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/uploads/2013/04/2-320x320.jpg',
    name: 'DON’T LET ME DOWN',
    description:
      'Shape it up, and choose your favorite style for portfolio. Show the world that you have the style and talent.',
    types: ['ILLUSTRATIONS'],
  },
  {
    thumbnail:
      'https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/uploads/2013/04/1-320x320.jpg',
    name: 'LETS GO TO SPACE',
    description: '',
    types: ['ILLUSTRATIONS'],
  },
  {
    thumbnail:
      'https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/uploads/2013/05/um_3-320x320.jpg',
    name: 'PORTFOLIO WITH GALLERY',
    description:
      'Nunc tempus, justo congue rhoncus malesuada, eros tellus pretium metus, id volutpat leo massa ut neque. Nulla aliquet erat imperdiet ligula pulvinar congue.',
    types: ['ICONS'],
  },
];

type Props = {};

const Portfolio = (props: Props) => {
  const [showData, setShowData] = useState(data);

  return (
    <div id="portfolio" className="container content-wrapper">
      <div className="text-center">
        <h1 className="main-title title">Portfolio</h1>
      </div>
      <div className="hr"></div>

      <div className="mt-[45px]">
        <Filter data={data} setShowData={setShowData} />
        <div className={style.gridGallery}>
          {showData.map((item, index) => (
            <GalleryItem image={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryItem = (props: any) => {
  const { image } = props;
  const { setShowImage, setImage } = useContext(OverlayImageContext);

  const handleShow = useCallback(() => {
    setShowImage(true);
    setImage(image);
  }, [image]);

  return (
    <div className={style.gridGalleryItem}>
      <img src={image.thumbnail} alt="image" />
      <div className={style.overlay}>
        <h3>{image.name}</h3>
        <h4>{image.types.join(', ')}</h4>

        <p>{image?.description}</p>

        <div className={style.actions}>
          <button className={style.action} onClick={handleShow}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const ALL = 'all';
const Filter = (props: any) => {
  const { data = [], setShowData } = props;

  const [current, setCurrent] = useState<string>(ALL);

  const categories = useMemo(() => {
    return data?.reduce(
      (prev: any[], curr: any) => {
        const types = curr?.types || [];
        types.forEach((type: string) => {
          if (!prev?.includes(type)) prev.push(type);
        });

        return prev;
      },
      [ALL]
    );
  }, [data]);

  const handleSelect = (item: string) => {
    setCurrent(item);
    if (item == ALL) setShowData(data);
    else setShowData(data.filter((e: any) => e.types?.includes(item)));
  };

  return (
    <ul className={style.filterContainer}>
      {categories?.map((e: string, index: number) => (
        <li
          key={index}
          className={[
            style.filterOption,
            current === e ? style.active : '',
          ].join(' ')}
        >
          <span onClick={() => handleSelect(e)}>{e}</span>
        </li>
      ))}
    </ul>
  );
};

export default Portfolio;
